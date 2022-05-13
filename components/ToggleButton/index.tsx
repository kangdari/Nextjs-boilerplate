import React, { useState } from 'react';
import { cls } from '../../utils';

interface ToggleButtonProps {
  value: boolean;
  onToggle: (value: boolean) => void;
}

function ToggleButton({ value, onToggle }: ToggleButtonProps) {
  const onClick = () => onToggle(!value);

  return (
    <div
      className={cls(
        'duration-500, relative h-28 w-52 cursor-pointer rounded-64 transition-all',
        value ? 'bg-blue-7' : 'bg-grey-3',
      )}
      onClick={onClick}>
      <div
        className={cls(
          'absolute top-2 left-2 h-24 w-24 rounded-12 bg-white transition-all duration-500',
          value ? 'translate-x-24' : 'translate-x-2',
        )}
      />
    </div>
  );
}

export default ToggleButton;
