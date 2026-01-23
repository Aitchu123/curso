import React from 'react';
import { Instagram } from 'lucide-react';

const InstagramButton: React.FC = () => {
  const handleInstagramClick = () => {
    window.open('https://instagram.com/instrumentandoo', '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleInstagramClick}
        className="bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 hover:scale-110 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform animate-pulse"
        aria-label="Contact us on Instagram"
      >
        <Instagram className="w-8 h-8" />
      </button>
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Talk to us on Instagram
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
      </div>
    </div>
  );
};

export default InstagramButton;
