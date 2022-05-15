import { useDispatch, useSelector } from 'react-redux';
import { GlobalModalType, setModal } from '../store/slice/globalModal';

export default function useGlobalModal() {
  const dispatch = useDispatch();
  const { modalType } = useSelector(state => state.globalModal);

  const showModal = ({ modalType, modalProps }: GlobalModalType) => {
    dispatch(setModal({ modalType, modalProps }));
  };

  const hideModal = () => {
    dispatch(setModal({ modalType: null, modalProps: null }));
  };

  return {
    modalType,
    setModal,
    showModal,
    hideModal,
  };
}
