import { useState, useRef } from 'react';

const FacebookEmbed = ({ url, maxWidth = 500 }) => {
  const [isLoading, setIsLoading] = useState(true);
  const iframeRef = useRef(null);
  const encodedUrl = encodeURIComponent(url);

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
          <div 
            className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow  overflow-hidden"
            style={{ maxWidth }}
          >
            <iframe
              ref={iframeRef}
              src={`https://www.facebook.com/plugins/post.php?href=${encodedUrl}&show_text=true&width=100%`}
              width="100%"
              height="700"
              style={{ 
                border: 'none',
                overflow: 'hidden',
                minHeight: '500px'
              }}
              onLoad={() => setIsLoading(false)}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              title="Facebook Embed"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacebookEmbed;