import React from 'react';
import { AvatarOn } from '@constants/icons';
import Button from '@components/Button';

interface UserRowPros {
  buttonLabel?: string;
  buttonClick?: () => void;
}

function UserRow({ buttonLabel, buttonClick }: UserRowPros) {
  // todo userHook => user nickname 추출

  return (
    <div className='flex items-center'>
      <AvatarOn className='mr-12' />
      <p className='flex-1 text-h5'>User NickName</p>
      {buttonLabel && (
        <Button className='ml-auto' type='grey' size={32} onClick={buttonClick}>
          {buttonLabel}
        </Button>
      )}
    </div>
  );
}

export default UserRow;
