import React from 'react';
import useToggle from '@hooks/useToggle';
import { cls } from '@utils/index';
import TextareaAutosize from 'react-textarea-autosize';

interface TextAreaProps {
  placeholder?: string;
  onChange: (value: string) => void;
  value: string;
  name?: string;
  className?: string;
}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ placeholder, onChange, value, name, className = '' }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const { value } = e.target;
      onChange(value);
    };

    return (
      <TextareaAutosize
        ref={ref}
        value={value}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        className={cls(className, 'w-full resize-none  text-l1 caret-blue-7 outline-none')}
        // onFocus={setFocus}
        // onBlur={setFocus}
      />
    );
  },
);

export default TextArea;
