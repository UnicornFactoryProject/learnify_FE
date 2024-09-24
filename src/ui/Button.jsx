//Custom Button component
import React from 'react';
import { LoadingDots } from './LoadingDots';

const Button = ({
  buttonText,
  buttonImage,
  isLoading,
  disabled,
  className,
  onClick,
  ...rest
}) => {
  return (
    <button
      disabled={disabled || isLoading}
      className={`bg-secondary-100 rounded-md text-white py-2 px-5 ${className} ${
        disabled ? 'disabled:bg-secondary-100 disabled:cursor-not-allowed' : ''
      } w-fit`}
      onClick={!isLoading ? onClick : undefined}
      {...rest}
    >
      {isLoading ? <LoadingDots /> : buttonText}
    </button>
  );
};

export default Button;
