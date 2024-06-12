import React, { FC } from 'react';

interface LoadingDriverProps {
  large?: boolean;
}

const LoadingDriver: FC<LoadingDriverProps> = ({ large }) => {
  return (
    <div className="driver-detail text-center text-white p-4">
    <div className="flex flex-col items-center animate-pulse">
      <p className="font-bold max-w-xs bg-gray-400 h-6 w-full rounded-lg mb-2card-font flex-1 text-center animate-pulse">loading latest session</p>
  
    </div>
  </div>
  );
};

export default LoadingDriver;
