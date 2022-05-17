import React, { useCallback } from 'react';
import useToggle from '@hooks/useToggle';
import { cls } from '@utils/index';
import { SmClose } from '@constants/icons';

interface InputProps {
  // todo type 추가
  // type: InputType;
  full?: boolean;
  placeholder?: string;
  onChange: (value: string, name?: string) => void;
  value: string;
  name?: string;
  reset?: boolean;
  className?: string;
  numberLabel?: number | boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ full, placeholder, onChange, value, name, reset, numberLabel, className = '' }, ref) => {
    const [focus, setFocus] = useToggle();

    // e를 넘길까?
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;
      console.log(e.target);
      onChange(value, name);
    };

    const handleReset = useCallback(() => onChange(''), []);

    return (
      <div
        className={cls(
          `${className} relative overflow-hidden rounded-12 border-[1.5px]`,
          focus ? 'border-blue-7' : 'border-grey-3',
          full ? 'w-full' : 'w-320',
        )}>
        {numberLabel && <span className='absolute left-18 top-15 text-l1'>{numberLabel}</span>}
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
            numberLabel ? 'pl-40' : '',
          )}
          onFocus={setFocus}
          onBlur={setFocus}
        />
        {value && reset && (
          <button
            type='button'
            onClick={handleReset}
            className='absolute  top-18 right-18 flex h-24 w-24 items-center justify-center rounded-12 bg-grey-2'>
            <SmClose />
          </button>
        )}
      </div>
    );
  },
);

export default Input;
