import * as React from 'react';
import Text from './Text';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  width?: string;
  height?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  type = "button",
  onClick,
  text,
  className = "",
  width = "auto",
  height = "h-[45px]",
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${height} ${width === "auto" ? "w-auto" : width} rounded-[10px] items-center flex justify-center px-4 transition-colors ${className}`}
      {...props}
    >
      <Text className="text-white font-medium">
        {text}
      </Text>
    </button>
  );
};

export default Button;