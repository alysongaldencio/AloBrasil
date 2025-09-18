import React from 'react';

interface InputProps {
  label?: string;
  type?: 'text' | 'email' | 'password' | 'tel' | 'url';
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  className = '',
  required = false,
  disabled = false,
  error,
}) => {
  const inputClasses = `
    w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-gold-400
    ${error ? 'border-red-500' : 'border-gray-600'}
    ${disabled ? 'bg-gray-700 cursor-not-allowed' : 'text-white'}
    ${className}
  `;

  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-300">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={inputClasses}
        style={{ backgroundColor: disabled ? '#374151' : '#041437' }}
        required={required}
        disabled={disabled}
      />
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default Input;
