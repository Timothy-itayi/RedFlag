import React, { FC } from 'react';

interface LoadingDriverProps {
  large?: boolean;
}

const LoadingDriver: FC<LoadingDriverProps> = ({ large }) => {
  return (
    <div className="bg-white shadow-lg items-center justify-center rounded-lg p-4 md:p-6 animate-pulse">
      <div className="grid grid-1 place-content-left">
       
        <div className="grid grid-1 place-content-left">
          <div className="grid grid-1 pb-2 place-content-left">
            <div className="bg-gray-300 h-4 w-20 md:w-24 mb-1 rounded"></div>

          </div>
        </div>
        <div className="grid grid-1 place-content-left">
        
        </div>
      </div>
    </div>
  );
};

export default LoadingDriver;
