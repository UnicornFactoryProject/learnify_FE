import React from 'react';

const SkeletonLoader = ({ width, height, borderRadius, className }) => {
  return (
    <div className='w-[95%] mx-auto'>
        <div
        className={`bg-gray-300 animate-pulse px-4 ${className}`}
        style={{
            width: width || '100%',
            height: height || '100%',
            borderRadius: borderRadius || '0.5rem',
        }}
        ></div>
    </div>
  );
};

export default SkeletonLoader;