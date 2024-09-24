import React, { useState, useEffect } from 'react';

const Input = ({
  label,
  type = 'text',
  onChange,
  value = '',  // Default value to ensure `value.length` is always valid
  required = false,
  errorText,
  className = '',
  ...props
}) => {
  const [hasText, setHasText] = useState(value.length > 0);
  const [isFocused, setIsFocused] = useState(false);

  // Update `hasText` state when `value` changes from parent
  useEffect(() => {
    setHasText(value.length > 0);
  }, [value]);

  return (
    <div className="mb-1">
      {label && (
        <label className="block text-[18px] font-medium text-gray-700 mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        {...props}
        type={type}
        value={value}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={(e) => {
          setHasText(e.target.value.length > 0);
          if (onChange) onChange(e);
        }}
        className={`px-3 py-[12px] h-[48px] rounded-[8px] shadow-sm border focus:outline-none focus:ring-[#181818] focus:border-[#181818] 
          ${isFocused || hasText ? 'bg-white' : 'bg-[#ECECEC]'} 
          ${errorText ? 'border-red-500' : ''} 
          ${className}`}
      />
      {errorText && <span className="text-red-500 text-sm mt-1">{errorText}</span>}
    </div>
  );
};

export default Input;
