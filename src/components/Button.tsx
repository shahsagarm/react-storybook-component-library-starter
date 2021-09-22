import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'large' | 'medium' | 'small';
  label?: string;
  onClick?: () => void;
}

export const Button = ({
  variant = 'primary',
  size = 'medium',
  label = 'Default',
  ...props
}: ButtonProps) => {
  return <button onClick={props.onClick}>{label}</button>;
};
