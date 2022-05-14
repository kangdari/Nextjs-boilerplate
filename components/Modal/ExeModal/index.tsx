import React from 'react';
import Modal from '@components/Modal';

interface ExeModalProps {
  size?: 'sm' | 'lg';
  isOpen: boolean;
  onClose: () => void;
  closeIcon?: boolean;
  backIcon?: boolean;
  headerButtonClick?: () => void;
  headerButtonLabel?: string;
  buttonComponent?: React.ReactNode;
  [key: string]: any;
}

function ExeModal({ isOpen, onClose, ...rest }: ExeModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} {...rest}>
      <div className='h-140 w-full rounded-8 bg-grey-3'>ExeModal</div>
    </Modal>
  );
}

export default ExeModal;
