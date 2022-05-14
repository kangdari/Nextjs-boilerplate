import React, { useCallback } from 'react';
import useToggle from '@hooks/useToggle';
import { cls } from '@utils/index';

interface TextAreaProps {
  placeholder?: string;
  onChange: (value: string) => void;
  value: string;
  name?: string;
  className?: string;
}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ placeholder, onChange, value, name, className = '' }, ref) => {
    const [focus, setFocus] = useToggle();

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const { value } = e.target;
      onChange(value);
    };

    return (
      <div
        className={cls(
          `${className} relative max-h-300 overflow-hidden rounded-12 border-[1.5px]`,
          focus ? 'border-blue-7' : 'border-grey-3',
        )}>
        <textarea
          ref={ref}
          value={value}
          name={name}
          onChange={handleChange}
          placeholder={placeholder}
          className={cls(
            'min-h-300 w-full resize-none px-18 py-15 text-l1 caret-blue-7 outline-none',
          )}
          onFocus={setFocus}
          onBlur={setFocus}
        />
      </div>
    );
  },
);

export default TextArea;
