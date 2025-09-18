import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
}) => {
  const baseClasses = 'font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'text-white focus:ring-gold-400 border-2 border-gold-400 hover:border-gold-300 shadow-lg',
    secondary: 'text-white focus:ring-gold-400 border-2 border-gold-500 hover:border-gold-400 shadow-lg',
    outline: 'border-2 border-gold-400 text-gold-400 hover:bg-gold-400 focus:ring-gold-400 shadow-lg',
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`;
  
  const getBackgroundStyle = () => {
    if (disabled) return { backgroundColor: '#041437' };
    switch (variant) {
      case 'primary':
        return { backgroundColor: '#041437' };
      case 'secondary':
        return { backgroundColor: '#041437' };
      case 'outline':
        return {};
      default:
        return { backgroundColor: '#041437' };
    }
  };
  
  return (
    <button
      type={type}
      className={classes}
      style={getBackgroundStyle()}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
