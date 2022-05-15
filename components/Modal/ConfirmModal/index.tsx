import React from 'react';
import ReactModal from 'react-modal';
import { cls } from '@utils/index';
import Button from '@components/Button';
import strings from '@constants/strings';

export interface ConfirmModalProps {
  message: string;
  handleConfirm: any;
  handleClose: () => void;
  confirmText: string;
  cancelText: string;

  [key: string]: any;
}

const customStyles = {
  overlay: {
    background: 'transparent',
  },
};

function ConfirmModal({
  message,
  handleConfirm,
  handleClose,
  confirmText = strings.Confirm,
  cancelText = strings.Cancel,
}: ConfirmModalProps) {
  return (
    <ReactModal
      className={cls(
        'absolute top-[50%] left-[50%] flex w-312 min-w-312 translate-x-[-50%] translate-y-[-50%] flex-col items-center justify-center rounded-20 border-none bg-white p-20 shadow-[0_4px_32px_0px_rgba(0,0,0,0.3)]',
      )}
      isOpen={true}
      onRequestClose={handleClose}
      style={customStyles}
      ariaHideApp={false}>
      <p className='h4 mb-20 font-bold'>{message}</p>
      <div className='flex w-full justify-between'>
        <Button className='w-130' type='grey-border' size={56} onClick={handleClose}>
          {cancelText}
        </Button>
        <Button className='w-130' type='blue' size={56} onClick={handleConfirm}>
          {confirmText}
        </Button>
      </div>
    </ReactModal>
  );
}

export default ConfirmModal;
