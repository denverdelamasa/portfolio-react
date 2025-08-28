// CircleButton.jsx
import { useState } from 'react';

const PaypalMeButton = ({ theme, onClick, icon }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Replace with your actual PayPal.me link
  const paypalLink = "https://paypal.me/wanedanvers";

  const handleClick = () => {
    window.open(paypalLink, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      {showTooltip && (
        <div 
          className={`absolute bottom-full right-0 mb-2 px-3 py-2  shadow-lg transition-opacity duration-300 bg-base-300`}
          style={{ width: 'max-content' }}
        >
          <span className="text-sm font-medium">Feeling generous? Buy me a coffee! ☕</span>
          <div className="absolute bottom-0 right-3 w-3 h-3 transform rotate-45 translate-y-1/2 bg-inherit"></div>
        </div>
      )}
      
      {/* Button */}
      <button
        onClick={handleClick}
        onMouseEnter={() => {
          setIsHovered(true);
          setShowTooltip(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          setShowTooltip(false);
        }}
        className={`w-14 h-14 bg-base-300 border-2 border-warning flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-105`}
        style={{
          transform: isHovered ? 'scale(1.1)' : 'scale(1)',
          boxShadow: isHovered 
            ? '0 10px 25px rgba(245, 158, 11, 0.5)' 
            : '0 4px 15px rgba(0, 0, 0, 0.2)'
        }}
        aria-label="Buy me a coffee"
      >
        {/* Coffee icon */}
        <i className="bi bi-cup-hot"></i>
      </button>
    </div>
  );
};

export default PaypalMeButton;