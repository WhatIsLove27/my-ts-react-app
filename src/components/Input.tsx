import React from 'react';
import Text from './Text';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  multiline?: boolean;
  className?: string;
}

const Input: React.FC<InputProps> = ({ 
  name, 
  type = "text", 
  placeholder = "", 
  className = "", 
  label, 
  multiline = false,
  value,
  onChange,
  ...props 
}) => {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && <Text as="label" htmlFor={name} className="text-sm text-white">{label}</Text>}
      {multiline ? (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          className="w-full focus:outline-none border-2 px-4 py-2 bg-gray-800 border-gray-500 rounded-md text-white"
          value={value}
          onChange={onChange}
          {...props as React.TextareaHTMLAttributes<HTMLTextAreaElement>}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          className="w-full focus:outline-none border-2 px-4 py-2 bg-gray-800 border-gray-500 rounded-md text-white"
          value={value}
          onChange={onChange}
          {...props}
        />
      )}
    </div>
  );
};

export default Input;