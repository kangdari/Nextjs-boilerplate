import React from 'react';
import { cls } from '@utils/index';
import TextareaAutosize from 'react-textarea-autosize';
import { UseFormRegisterReturn } from 'react-hook-form';
import useToggle from '@hooks/useToggle';

interface TextAreaProps {
  placeholder?: string;
  className?: string;
  register?: UseFormRegisterReturn;
  border: boolean;
}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ placeholder, className = '', register, border, ...rest }, ref) => {
    const [focus, setFocus] = useToggle();

    return (
      <TextareaAutosize
        {...register}
        {...rest}
        ref={ref}
        placeholder={placeholder}
        className={cls(
          className,
          'w-full resize-none  text-l1 caret-blue-7 outline-none',
          border ? 'min-h-200 rounded-12 border-[1.5px] p-18 text-h5' : '',
          border && focus ? 'border-blue-7' : 'border-grey-3',
        )}
        onFocus={setFocus}
        onBlur={setFocus}
      />
    );
  },
);

export default TextArea;
