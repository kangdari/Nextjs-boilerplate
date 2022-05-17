import React from 'react';
import { cls } from '@utils/index';
import TextareaAutosize from 'react-textarea-autosize';
import { UseFormRegisterReturn } from 'react-hook-form';

interface TextAreaProps {
  placeholder?: string;
  // onChange?: (value: string) => void;
  // value: string;
  // name?: string;
  className?: string;
  register?: UseFormRegisterReturn;
}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      placeholder,
      // onChange,
      // value,
      // name,
      className = '',
      register,
      ...rest
    },
    ref,
  ) => {
    // const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    //   const { value } = e.target;
    //   onChange(value);
    // };

    return (
      <TextareaAutosize
        ref={ref}
        // value={value}
        // name={name}
        placeholder={placeholder}
        className={cls(className, 'w-full resize-none  text-l1 caret-blue-7 outline-none')}
        // onChange={handleChange}
        {...register}
        {...rest}
        // onFocus={setFocus}
        // onBlur={setFocus}
      />
    );
  },
);

export default TextArea;
