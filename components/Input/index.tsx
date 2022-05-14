import React, { useCallback } from 'react';
import useToggle from '@hooks/useToggle';
import { cls } from '@utils/index';
import Close from '@icon/close.svg';

interface InputProps {
  // todo type 추가
  // type: InputType;
  full?: boolean;
  placeholder?: string;
  onChange: (value: string) => void;
  value: string;
  name?: string;
  reset?: boolean;
  className?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ full, placeholder, onChange, value, name, reset, className = '' }, ref) => {
    const [focus, setFocus] = useToggle();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      onChange(value);
    };

    const handleReset = useCallback(() => onChange(''), []);

    return (
      <div
        className={cls(
          `${className} relative overflow-hidden rounded-12 border-[1.5px]`,
          focus ? 'border-blue-7' : 'border-grey-3',
          full ? 'w-full' : 'w-320',
        )}>
        <input
          ref={ref}
          type='text'
          value={value}
          name={name}
          onChange={handleChange}
          placeholder={placeholder}
          className={cls(
            'w-full px-18 py-15 text-l1 caret-blue-7 outline-none',
            reset ? 'pr-48' : '',
          )}
          onFocus={setFocus}
          onBlur={setFocus}
        />
        {value && reset && (
          <button
            type='button'
            onClick={handleReset}
            className='absolute  top-18 right-18 flex h-24 w-24 items-center justify-center rounded-12 bg-grey-2'>
            <Close />
          </button>
        )}
      </div>
    );
  },
);

export default Input;
