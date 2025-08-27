import { useState, useEffect, useRef } from 'react';

const InstagramEmbed = ({ url, maxWidth = 500 }) => {
  const [isLoading, setIsLoading] = useState(true);
  const embedRef = useRef(null);
  
  useEffect(() => {
    const handleLoad = () => setIsLoading(false);
    
    // Create script if needed
    if (!window.instgrm) {
      const script = document.createElement('script');
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      script.onload = () => {
        window.instgrm.Embeds.process();
        setTimeout(() => setIsLoading(false), 1000);
      };
      document.body.appendChild(script);
    } else {
      window.instgrm.Embeds.process();
      setTimeout(() => setIsLoading(false), 500);
    }
    
    // Add event listener to iframe after it's created
    const checkIframe = setInterval(() => {
      const iframe = embedRef.current?.querySelector('iframe');
      if (iframe) {
        iframe.addEventListener('load', handleLoad);
        clearInterval(checkIframe);
      }
    }, 100);

    return () => {
      clearInterval(checkIframe);
      const iframe = embedRef.current?.querySelector('iframe');
      if (iframe) iframe.removeEventListener('load', handleLoad);
    };
  }, [url]);

  return (
    <div className="my-8">
      {isLoading && (
        <div className="card bg-base-300 border border-base-300  w-full max-w-md mx-auto">
          <div className="animate-pulse flex flex-col p-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className="rounded-full bg-base-200 h-12 w-12"></div>
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-base-200 rounded w-3/4"></div>
                <div className="h-3 bg-base-200 rounded w-1/2"></div>
              </div>
            </div>
            <div className=" bg-base-200 h-80 w-full"></div>
            <div className="mt-4 space-y-2">
              <div className="h-4 bg-base-200 rounded w-full"></div>
              <div className="h-4 bg-base-200 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      )}

      <div className={`${isLoading ? 'hidden' : 'block'}`}>
        <div className="flex justify-center">
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow  overflow-hidden" style={{ maxWidth }}>
            <blockquote
              ref={embedRef}
              className="instagram-media"
              data-instgrm-permalink={url}
              data-instgrm-version="14"
            >
              <a href={url} target="_blank" rel="noopener noreferrer">
                Loading Instagram post...
              </a>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramEmbed;