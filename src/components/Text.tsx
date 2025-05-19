import React, { HTMLAttributes } from 'react';

type TextTags = 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label';

interface TextProps extends HTMLAttributes<HTMLElement> {
  as?: TextTags;
  className?: string;
}

const Text: React.FC<TextProps> = ({ 
  children, 
  className = "", 
  as: Tag = 'p', 
  ...props 
}) => {
  return (
    <Tag className={`${className}`} {...props}>
      {children}
    </Tag>
  );
};

export default Text;