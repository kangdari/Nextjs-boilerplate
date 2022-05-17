import React, { useCallback } from 'react';
import useToggle from '@hooks/useToggle';
import { cls } from '@utils/index';
import { SmClose } from '@constants/icons';
import { UseFormRegisterReturn } from 'react-hook-form';

interface UserFormInputProps {
  full?: boolean;
  placeholder?: string;
  className?: string;
  register?: UseFormRegisterReturn;

  [key: string]: any;
}

const UserFormInput = React.forwardRef<HTMLInputElement, UserFormInputProps>(
  ({ full, placeholder, className = '', register, ...rest }, ref) => {
    const [focus, setFocus] = useToggle();

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
          placeholder={placeholder}
          className={cls('w-full px-18 py-15 text-l1 caret-blue-7 outline-none')}
          onFocus={setFocus}
          onBlur={setFocus}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              e.preventDefault();
            }
          }}
          {...register}
          {...rest}
        />
        {/*{value && reset && (*/}
        {/*  <button*/}
        {/*    type='button'*/}
        {/*    onClick={handleReset}*/}
        {/*    className='absolute  top-18 right-18 flex h-24 w-24 items-center justify-center rounded-12 bg-grey-2'>*/}
        {/*    <SmClose />*/}
        {/*  </button>*/}
        {/*)}*/}
      </div>
    );
  },
);

export default UserFormInput;