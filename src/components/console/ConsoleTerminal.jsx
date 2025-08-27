import { useEffect, useRef, useState } from 'react';
import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import 'xterm/css/xterm.css';

const ConsoleTerminal = () => {
  const terminalRef = useRef(null);
  const termRef = useRef(null);
  const pyodideRef = useRef(null);
  const inputBuffer = useRef('');
  const [isLoading, setIsLoading] = useState(true);
  const isWaitingForInput = useRef(false);
  const inputResolver = useRef(null);

  useEffect(() => {
    const term = new Terminal({
      fontFamily: '"Fira Code", "Courier New", monospace',
      fontSize: 12,
      cursorBlink: true,
      theme: {
        background: '#000000',
        foreground: '#e2e8f0',
        cursor: '#f8fafc',
        selection: 'rgba(74, 222, 128, 0.3)',
      },
    });

    const fitAddon = new FitAddon();
    term.loadAddon(fitAddon);
    term.open(terminalRef.current);
    fitAddon.fit();
    term.focus();
    termRef.current = term;

    const handleResize = () => fitAddon.fit();
    window.addEventListener('resize', handleResize);

    const printWelcomeMessage = () => {
      term.writeln('\x1b[33mPython Terminal\x1b[0m');
      term.writeln('Try: \x1b[32mPOS_DSA.py\x1b[0m to run the POS ASCII console app from C');
      term.writeln('Or try: \x1b[32mCP2_FINALS.py\x1b[0m to run the CAT-CHA from C#');
    };

    const prompt = () => {
      term.write('\r\n\x1b[32m$\x1b[0m ');
    };

    const fetchPythonFile = async (filename) => {
      try {
        const response = await fetch(`/${filename}`);
        if (!response.ok) throw new Error('File not found');
        return await response.text();
      } catch (err) {
        term.writeln(`\x1b[31mError: ${err.message}\x1b[0m`);
        return null;
      }
    };

    const executePythonFile = async (filename) => {
      term.writeln(`\r\nRunning ${filename}...`);
      
      const fileContent = await fetchPythonFile(filename);
      if (!fileContent) return;

      try {
        await pyodideRef.current.runPythonAsync(`
          import sys
          class TerminalOutput:
            def write(self, text):
              js_print(text.replace('\\n', '\\r\\n'))
              return len(text)
            
            def flush(self):
              pass
          
          sys.stdout = TerminalOutput()
          sys.stderr = TerminalOutput()
        `);
        
        // Create the JavaScript print function
        const jsPrint = (text) => {
          term.write(text);
        };
        
        // Create the JavaScript input function
        const jsInput = () => {
          return new Promise((resolve) => {
            isWaitingForInput.current = true;
            inputResolver.current = resolve;
            term.write('\r\n');
          });
        };
        
        // Add functions to Python environment
        pyodideRef.current.globals.set("js_print", jsPrint);
        pyodideRef.current.globals.set("js_input", jsInput);

        // Execute the file content
        await pyodideRef.current.runPythonAsync(fileContent);
      } catch (err) {
        term.writeln(`\x1b[31mExecution error: ${err}\x1b[0m`);
      }
    };

    const initPyodide = async () => {
      try {
        term.writeln('Loading Python environment...');
        pyodideRef.current = await window.loadPyodide({
          indexURL: "https://cdn.jsdelivr.net/pyodide/v0.23.4/full/"
        });
        
        term.writeln('\x1b[32mPython ready!\x1b[0m');
        setIsLoading(false);
        printWelcomeMessage();
        prompt();
      } catch (err) {
        term.writeln(`\x1b[31mFailed to load Pyodide: ${err.message}\x1b[0m`);
      }
    };

    initPyodide();

    term.onData(async (data) => {
      const term = termRef.current;
      
      if (isWaitingForInput.current) {
        if (data === '\r') { // Enter
          term.write('\r\n');
          if (inputResolver.current) {
            const resolve = inputResolver.current;
            inputResolver.current = null;
            isWaitingForInput.current = false;
            resolve(inputBuffer.current);
            inputBuffer.current = '';
          }
        } else if (data === '\x7f') { // Backspace
          if (inputBuffer.current.length > 0) {
            inputBuffer.current = inputBuffer.current.slice(0, -1);
            term.write('\b \b');
          }
        } else {
          inputBuffer.current += data;
          term.write(data);
        }
        return;
      }

      if (data === '\r') { // Enter
        term.write('\r\n');
        const input = inputBuffer.current.trim();
        inputBuffer.current = '';

        if (!input) {
          prompt();
          return;
        }

        if (input.endsWith('.py')) {
          await executePythonFile(input);
        } else {
          // Execute as Python code
          try {
            const result = await pyodideRef.current.runPythonAsync(input);
            if (result !== undefined) {
              term.writeln(String(result));
            }
          } catch (err) {
            term.writeln(`\x1b[31m${err}\x1b[0m`);
          }
        }
        prompt();
      } else if (data === '\x7f') { // Backspace
        if (inputBuffer.current.length > 0) {
          inputBuffer.current = inputBuffer.current.slice(0, -1);
          term.write('\b \b');
        }
      } else {
        inputBuffer.current += data;
        term.write(data);
      }
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      term.dispose();
    };
  }, []);

  return (
    <div className="bg-black text-gray-200 p-6 rounded-xl w-2xl sm:w-full max-w-10xl font-mono shadow-lg">
      <div className="flex justify-between items-center align-middle mb-4">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500 m-1 p-auto"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500 m-1 p-auto"></div>
          <div className="w-3 h-3 rounded-full bg-green-500 m-1 p-auto"></div>
          <p className="text-sm text-gray-400 my-auto mx-4">
            Console - pyodide v0.23.4 
          </p>
        </div>
        {isLoading && (   
          <p className="md:text-xs text-gray-400">
            Loading Python environment...
          </p>
        )}
      </div>

      <div 
        ref={terminalRef} 
        className="h-120"
        onClick={() => termRef.current?.focus()}
      />
    </div>
  );
};

export default ConsoleTerminal;