import React, { useEffect } from 'react';
import ConfirmModal from '@components/Modal/ConfirmModal';
import { useSelector } from 'react-redux';

export const MODAL_TYPES = { ConfirmModal: 'ConfirmModal' } as const;

const MODAL_COMPONENTS: any = {
  [MODAL_TYPES.ConfirmModal]: ConfirmModal,
};

const GlobalModal = () => {
  const { modalType, modalProps } = useSelector(state => state.globalModal);

  useEffect(() => {
    if (modalType) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [modalType]);

  const renderComponent = () => {
    if (!modalType) {
      return null;
    }
    const ModalComponent = MODAL_COMPONENTS[modalType];
    return <ModalComponent {...modalProps} />;
  };

  return <>{renderComponent()}</>;
};
export default GlobalModal;
