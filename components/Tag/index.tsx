import React from 'react';
import { SmClose } from '@constants/icons';

interface TagProps {
  label: string;
  onRemove: () => void;
}

function Tag({ label, onRemove }: TagProps) {
  return (
    <div className='m-4 inline-flex min-w-80 items-center justify-between rounded-30 border-1 border-grey-3 py-4 px-8'>
      <span className='text-b1 font-bold'>#</span>
      <span className='px-4 text-b3 text-grey-9'>{label}</span>
      <SmClose className='cursor-pointer' onClick={onRemove} />
    </div>
  );
}

export default Tag;
