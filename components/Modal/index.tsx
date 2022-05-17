import React, { useCallback, useEffect } from 'react';
import ReactModal from 'react-modal';
import Button from '@components/Button';
import { SmallLeftArrow, LeftArrow, Close } from '@constants/icons';
import { cls } from '@utils/index';
import useWindowDimensions from '@hooks/useWindowDementions';

export interface ModalProps {
  size?: 'sm' | 'lg';
  isOpen: boolean;
  onClose: () => void;
  closeIcon?: boolean;
  backIcon?: boolean;
  onClickBackIcon?: () => void;
  headerButtonClick?: () => void;
  headerButtonLabel?: string;
  buttonComponent?: React.ReactNode;
  headerTitle?: string;
  noPadding?: boolean;
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
  onClickBackIcon,
  size = 'lg',
  headerButtonLabel,
  headerButtonClick,
  buttonComponent,
  headerTitle = 'title',
  noPadding = false,
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
        `flex flex-col overflow-hidden rounded-20 border-none bg-white shadow-[0_4px_32px_0px_rgba(0,0,0,0.3)]`,
        isTablet
          ? 'absolute top-0 left-0 right-0 bottom-0 translate-x-0 translate-y-0 rounded-0'
          : 'absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]',
        isTablet ? 'w-full' : size === 'lg' ? 'w-560' : 'w-420',
        'min-h-640',
      )}
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      ariaHideApp={false}>
      <div className='relative flex justify-center border-b-1 border-grey-3 px-16 py-15 text-l2 text-grey-11'>
        {size === 'lg' && backIcon && (
          <SmallLeftArrow
            className='absolute left-16 top-20 cursor-pointer'
            onClick={onClickBackIcon}
          />
        )}
        {size === 'sm' && backIcon && (
          <LeftArrow className='absolute left-16 top-20 cursor-pointer' onClick={onClickBackIcon} />
        )}
        {closeIcon && (
          <Close className='absolute left-16 top-16 cursor-pointer' onClick={onClose} />
        )}
        {headerTitle}
        {!!headerButtonLabel && (
          <Button
            className='absolute right-16 top-11'
            style={{ borderRadius: '64px' }}
            type='blue'
            size={32}
            onClick={handleHeaderButtonClick}>
            {headerButtonLabel}
          </Button>
        )}
      </div>
      <div className={cls('relative flex flex-1 flex-col', noPadding ? ' p-0' : ' p-24')}>
        {children}
      </div>
      {buttonComponent && <div className='p-24 pt-0'>{buttonComponent}</div>}
    </ReactModal>
  );
};

export default Modal;
