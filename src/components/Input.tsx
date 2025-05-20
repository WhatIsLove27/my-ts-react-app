import * as React from 'react';
import Text from './Text';

interface BaseInputProps {
  name: string;
  label?: string;
  placeholder?: string;
  className?: string;
  value?: string | number | readonly string[];
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

interface InputProps extends BaseInputProps, Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'name'> {
  multiline?: false;
}

interface TextareaProps extends BaseInputProps, Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange' | 'name'> {
  multiline: true;
  type?: never;
}

type InputComponentProps = InputProps | TextareaProps;

const Input: React.FC<InputComponentProps> = ({ 
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
  const commonProps = {
    id: name,
    name,
    placeholder,
    value,
    onChange,
    className: "w-full focus:outline-none border-2 px-4 py-2 bg-gray-800 border-gray-500 rounded-md text-white"
  };

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <Text 
          as="label" 
          htmlFor={name} 
          className="text-sm text-white"
        >
          {label}
        </Text>
      )}
      
      {multiline ? (
        <textarea
          {...commonProps}
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          type={type}
          {...commonProps}
          {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
    </div>
  );
};

export default Input;