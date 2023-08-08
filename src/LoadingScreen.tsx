import React, { useState, useEffect } from 'react';
import B from './image/B.png'
function LoadingScreen() {

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-500">
      <div className="text-white text-4xl">
        <img src={B} alt="Logo" className="w-16 h-16 mb-2" />
        PWA
      </div>
  </div>
  );
}

export default LoadingScreen;
