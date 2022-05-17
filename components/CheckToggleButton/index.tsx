import React from 'react';
import { CheckOn, CheckOff } from '@constants/icons';

interface CheckToggleButtonProps {
  toggle: boolean;
  label?: string;
  onClick: () => void;
}

function CheckToggleButton({ toggle, label, onClick }: CheckToggleButtonProps) {
  return (
    <div onClick={onClick} className='flex cursor-pointer items-center'>
      {toggle ? <CheckOn className='mr-6' /> : <CheckOff className='mr-6' />}
      {label && <span className='text-h5'>{label}</span>}
    </div>
  );
}

export default CheckToggleButton;
