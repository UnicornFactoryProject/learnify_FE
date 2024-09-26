import React from 'react';

const SuccessMessage = ({ message, buttonText, onClick }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <div className="flex flex-col items-center">
        <div className="rounded-full bg-green-100 p-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 text-green-500">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold mt-6">Successful!</h1>
        <p className="text-gray-600 mt-2">{message}</p>
        <button
          className="mt-6 bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
          onClick={onClick}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default SuccessMessage;
