import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { cls } from '@utils/index';

interface BorderlessInputProps {
  placeholder?: string;
  register?: UseFormRegisterReturn;
  className: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const BorderlessInput = React.forwardRef<HTMLInputElement, BorderlessInputProps>(
  ({ register, onKeyDown, className, placeholder, ...rest }, ref) => {
    return (
      <input
        type='text'
        ref={ref}
        className={cls(className, `w-full text-h2 outline-none`)}
        placeholder={placeholder}
        onKeyDown={onKeyDown}
        {...register}
        {...rest}
      />
    );
  },
);

export default BorderlessInput;
