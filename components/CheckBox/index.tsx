import React, { useState } from 'react';
import { cls } from '@utils/index';
import CheckOn from '@icon/checkOn.svg';
import CheckOff from '@icon/checkOff.svg';
import indexOf from 'lodash/indexOf';

interface CheckBoxProps {
  values: any;
  setValues: any;
  options: any[];
}

function CheckBoxOption({ option, onChange, checked }: any) {
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
        type='checkbox'
        checked={checked}
        onChange={onChange}
      />
      {checked ? <CheckOn className='mr-8' /> : <CheckOff className='mr-8' />}
      {option?.label}
    </label>
  );
}

function CheckBox({ options, values, setValues }: CheckBoxProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    const existingIndex = indexOf(values, value);

    if (existingIndex === -1) {
      setValues((prevState: any) => [...prevState, value]);
    } else if (existingIndex !== -1) {
      const filteredValues = values.filter((value: any) => value !== values[existingIndex]);
      setValues(filteredValues);
    }
  };

  return (
    <div className='space-y-16'>
      {options?.map(option => (
        <CheckBoxOption
          key={option.id}
          option={option}
          onChange={handleChange}
          checked={indexOf(values, option.value) !== -1}
        />
      ))}
    </div>
  );
}

export default CheckBox;
