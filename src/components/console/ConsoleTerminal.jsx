import { useEffect, useRef, useState, useCallback } from 'react';
import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import { WebLinksAddon } from 'xterm-addon-web-links';
import 'xterm/css/xterm.css';

const ConsoleTerminal = () => {
  const terminalRef = useRef(null);
  const termRef = useRef(null);
  const pyodideRef = useRef(null);
  const inputBuffer = useRef('');
  const [isLoading, setIsLoading] = useState(true);
  const isWaitingForInput = useRef(false);
  const inputResolver = useRef(null);
  const fitAddonRef = useRef(null);

  const printWelcomeMessage = useCallback((term) => {
    term.writeln('\x1b[33m🚀 Python Terminal Ready!\x1b[0m');
    term.writeln('Type:\x1b[32m POS_DSA.py\x1b[0m - Run POS ASCII console app');
    term.writeln('Type:\x1b[32m CP2_FINALS.py\x1b[0m - Run CAT-CHA from C#');
    term.writeln('Type:\x1b[36mhelp\x1b[0m - Show available commands\r\n');
  }, []);

  const showHelp = useCallback((term) => {
    term.writeln('\x1b[36mAvailable commands:');
    term.writeln('  <filename.py> - Run Python file');
    term.writeln('  <python code> - Execute Python code');
    term.writeln('  clear - Clear terminal');
    term.writeln('  help - Show this help\r\n');
  }, []);

  const prompt = useCallback((term) => {
    term.write('\r\n\x1b[32mpython>\x1b[0m ');
  }, []);

  const fetchPythonFile = useCallback(async (filename) => {
    try {
      const response = await fetch(`/${filename}`);
      if (!response.ok) throw new Error(`File "${filename}" not found`);
      return await response.text();
    } catch (err) {
      throw new Error(err.message);
    }
  }, []);

  const executePythonFile = useCallback(async (filename, term) => {
    term.writeln(`\x1b[33mRunning ${filename}...\x1b[0m`);
    
    try {
      const fileContent = await fetchPythonFile(filename);
      
      await pyodideRef.current.runPythonAsync(`
        import sys
        class TerminalOutput:
          def write(self, text):
            js_print(text)
            return len(text)
          
          def flush(self):
            pass
        
        sys.stdout = TerminalOutput()
        sys.stderr = TerminalOutput()
      `);
      
      const jsPrint = (text) => {
        term.write(text.replace(/\n/g, '\r\n'));
      };
      
      const jsInput = () => {
        return new Promise((resolve) => {
          isWaitingForInput.current = true;
          inputResolver.current = resolve;
          term.write('\r\n');
        });
      };
      
      pyodideRef.current.globals.set("js_print", jsPrint);
      pyodideRef.current.globals.set("js_input", jsInput);

      await pyodideRef.current.runPythonAsync(fileContent);
    } catch (err) {
      term.writeln(`\x1b[31mError: ${err.message}\x1b[0m`);
    }
  }, [fetchPythonFile]);

  const handleInput = useCallback(async (input, term) => {
    const trimmedInput = input.trim();
    
    if (!trimmedInput) return;

    switch (trimmedInput) {
      case 'clear':
        term.clear();
        break;
      case 'help':
        showHelp(term);
        break;
      default:
        if (trimmedInput.endsWith('.py')) {
          await executePythonFile(trimmedInput, term);
        } else {
          try {
            const result = await pyodideRef.current.runPythonAsync(trimmedInput);
            if (result !== undefined) {
              term.writeln(`\x1b[34m${String(result)}\x1b[0m`);
            }
          } catch (err) {
            term.writeln(`\x1b[31m${err.message}\x1b[0m`);
          }
        }
    }
  }, [executePythonFile, showHelp]);

  useEffect(() => {
    const term = new Terminal({
      fontFamily: '"Fira Code", "Cascadia Code", "Courier New", monospace',
      fontSize: 14,
      cursorBlink: true,
      cursorStyle: 'underline',
      theme: {
        background: '#000000',
        foreground: '#e2e8f0',
        cursor: '#00ff00',
        selection: 'rgba(74, 222, 128, 0.5)',
      },
    });

    const fitAddon = new FitAddon();
    const webLinksAddon = new WebLinksAddon();
    
    term.loadAddon(fitAddon);
    term.loadAddon(webLinksAddon);
    term.open(terminalRef.current);
    
    fitAddonRef.current = fitAddon;
    termRef.current = term;

    const initPyodide = async () => {
      try {
        term.writeln('\x1b[36mInitializing Python environment...\x1b[0m');
        
        // Load pyodide with specific packages
        pyodideRef.current = await window.loadPyodide({
          indexURL: "https://cdn.jsdelivr.net/pyodide/v0.23.4/full/",
          stdout: (msg) => term.write(msg),
          stderr: (msg) => term.write(`\x1b[31m${msg}\x1b[0m`),
        });

        // Set up environment
        await pyodideRef.current.loadPackage(['micropip']);
        
        term.write('\x1b[32m✅ Python ready! \x1b[0m');
        setIsLoading(false);
        printWelcomeMessage(term);
        prompt(term);
      } catch (err) {
        term.writeln(`\x1b[31mFailed to load Pyodide: ${err.message}\x1b[0m`);
        term.writeln('Please refresh the page to try again.');
      }
    };

    const handleResize = () => {
      fitAddon.fit();
    };

    const handleData = async (data) => {
      if (isWaitingForInput.current) {
        handleInputBuffer(data, term);
        return;
      }

      handleNormalInput(data, term);
    };

    const handleInputBuffer = (data, term) => {
      const charCode = data.charCodeAt(0);
      
      // Handle Enter key
      if (data === '\r') {
        term.write('\r\n');
        if (inputResolver.current) {
          const resolve = inputResolver.current;
          inputResolver.current = null;
          isWaitingForInput.current = false;
          resolve(inputBuffer.current);
          inputBuffer.current = '';
        }
        return;
      }
      
      // Handle Backspace and Delete
      if (data === '\x7f' || data === '\x08') {
        if (inputBuffer.current.length > 0) {
          inputBuffer.current = inputBuffer.current.slice(0, -1);
          term.write('\b \b');
        }
        return;
      }
      
      // Handle printable characters
      if (charCode >= 32 && charCode <= 126) {
        inputBuffer.current += data;
        term.write(data);
      }
    };

    const handleNormalInput = async (data, term) => {
      const charCode = data.charCodeAt(0);
      
      // Handle Enter key
      if (data === '\r') {
        term.write('\r\n');
        const input = inputBuffer.current.trim();
        inputBuffer.current = '';

        if (input) {
          await handleInput(input, term);
        }
        prompt(term);
        return;
      }
      
      // Handle Backspace and Delete
      if (data === '\x7f' || data === '\x08') {
        if (inputBuffer.current.length > 0) {
          inputBuffer.current = inputBuffer.current.slice(0, -1);
          term.write('\b \b');
        }
        return;
      }
      
      // Handle printable characters
      if (charCode >= 32 && charCode <= 126) {
        inputBuffer.current += data;
        term.write(data);
      }
    };

    // Initialize terminal
    fitAddon.fit();
    term.focus();
    window.addEventListener('resize', handleResize);
    term.onData(handleData);

    // Initialize Pyodide
    initPyodide();

    return () => {
      window.removeEventListener('resize', handleResize);
      term.dispose();
    };
  }, [handleInput, printWelcomeMessage, prompt]);

  return (
    <div className="bg-black border-2 border-accent text-gray-200 p-4 rounded-xl w-full max-w-7xl font-mono shadow-xl">
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-2 items-center">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="text-sm text-gray-400 ml-4">
            Python Console - pyodide v0.23.4
          </span>
        </div>
        {isLoading && (   
          <div className="flex items-center">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-accent mr-2"></div>
            <span className="text-xs text-gray-400">Loading Python...</span>
          </div>
        )}
      </div>

      <div 
        ref={terminalRef} 
        className="h-[50rem] w-full rounded-lg overflow-auto"
        onClick={() => termRef.current?.focus()}
      />
    </div>
  );
};

export default ConsoleTerminal;