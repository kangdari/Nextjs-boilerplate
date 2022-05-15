import React from 'react';
import { cls } from '@utils/index';
import { RadioOff, RadioOn } from '@constants/icons';

interface RadioOptionProps {
  value: any;
  setRadio: any;
  options: any[];
}

function RadioOption({ option, onChange, checked }: any) {
  return (
    <label
      htmlFor={option?.label}
      className={cls(
        `relative flex w-full cursor-pointer items-center overflow-hidden rounded-12 border-[1.5px] p-16`,
        checked ? 'border-blue-7' : 'border-grey-3',
      )}>
      <input
        id={option.label}
        name={option?.label}
        value={option?.value} // todo 수정
        className='absolute left-[-9999px]'
        type='radio'
        checked={checked}
        onChange={onChange}
      />
      {checked ? <RadioOn className='mr-8 min-w-24' /> : <RadioOff className='mr-8 min-w-24' />}
      {option?.label}
    </label>
  );
}

function RadioGroup({ options, value, setRadio }: RadioOptionProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value: selectValue } = e.target;
    setRadio(selectValue);
  };

  return (
    <div className='space-y-16'>
      {options?.map(option => (
        <RadioOption
          key={option.id}
          option={option}
          onChange={handleChange}
          checked={value === option.value}
        />
      ))}
    </div>
  );
}

export default RadioGroup;
