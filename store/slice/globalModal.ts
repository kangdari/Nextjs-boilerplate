import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MODAL_TYPES } from '@components/GlobalModal';
import { ConfirmModalProps } from '@components/Modal/ConfirmModal';

export interface GlobalModalType {
  modalType: 'ConfirmModal' | '' | null;
  modalProps: ConfirmModalProps | null;
}

const initialState: GlobalModalType = {
  modalType: null,
  modalProps: null,
};

const globalModalSlice = createSlice({
  name: 'globalModal',
  initialState,
  reducers: {
    setModal(state, action: PayloadAction<GlobalModalType>) {
      state.modalType = action.payload.modalType;
      state.modalProps = action.payload.modalProps;
    },
  },
});

export default globalModalSlice.reducer;
export const { setModal } = globalModalSlice.actions;
