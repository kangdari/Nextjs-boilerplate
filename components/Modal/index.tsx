import React, { useCallback, useEffect } from 'react';
import ReactModal from 'react-modal';
import Button from '@components/Button';
import { SmallLeftArrow, LeftArrow, Close } from '@constants/icons';
import { cls } from '@utils/index';
import useWindowDimensions from '@hooks/useWindowDementions';

interface ModalProps {
  size?: 'sm' | 'lg';
  isOpen: boolean;
  onClose: () => void;
  closeIcon?: boolean;
  backIcon?: boolean;
  headerButtonClick?: () => void;
  headerButtonLabel?: string;
  buttonComponent?: React.ReactNode;
  children?: React.ReactNode;
}

const customStyles = {
  overlay: {
    background: 'transparent',
  },
};

const Modal = ({
  isOpen,
  onClose,
  closeIcon,
  backIcon,
  size = 'lg',
  headerButtonLabel,
  headerButtonClick,
  buttonComponent,
  children,
}: ModalProps) => {
  const { isTablet } = useWindowDimensions() || {};

  const handleHeaderButtonClick = useCallback(() => {
    if (headerButtonClick) {
      headerButtonClick();
    }
  }, [headerButtonClick]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <ReactModal
      className={cls(
        `rounded-20 border-none bg-white shadow-[0_4px_32px_0px_rgba(0,0,0,0.3)]`,
        isTablet
          ? 'absolute top-0 left-0 right-0 bottom-0 translate-x-0 translate-y-0 rounded-0'
          : 'absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]',
        isTablet ? 'w-full' : size === 'lg' ? 'w-560' : 'w-420',
      )}
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      ariaHideApp={false}>
      <div className='l2 relative flex justify-center border-b-1 border-grey-3 px-16 py-15 text-grey-11'>
        {size === 'lg' && backIcon && (
          <SmallLeftArrow className='absolute left-16 top-20 cursor-pointer' onClick={onClose} />
        )}
        {size === 'sm' && backIcon && (
          <LeftArrow className='absolute left-16 top-20 cursor-pointer' onClick={onClose} />
        )}
        {closeIcon && (
          <Close className='absolute left-16 top-16 cursor-pointer' onClick={onClose} />
        )}
        Header
        {!!headerButtonLabel && (
          <Button
            className='absolute right-16 top-11'
            type='blue'
            size={32}
            onClick={handleHeaderButtonClick}>
            {headerButtonLabel}
          </Button>
        )}
      </div>
      <div className='p-24'>{children}</div>
      {buttonComponent && <div className='p-24 pt-0'>{buttonComponent}</div>}
    </ReactModal>
  );
};

export default Modal;
