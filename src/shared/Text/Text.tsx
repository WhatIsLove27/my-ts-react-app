import React from 'react';

interface TextProps {
  text: string;
  className?: string;
}

const Text: React.FC<TextProps> = ({ text, className }) => {
  return (
    <span className={`text-white text-sm font-medium ${className}`}>
      {text}
    </span>
  );
};

export default Text;