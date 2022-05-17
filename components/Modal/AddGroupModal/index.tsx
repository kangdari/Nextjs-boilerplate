import React, { useEffect } from 'react';
import Modal, { ModalProps } from '@components/Modal';
import strings from '@constants/strings';
import { useForm } from 'react-hook-form';
import UserFormInput from '@components/UserFormInput';
import Button from '@components/Button';

interface AddGroupModalProps extends ModalProps {}

interface AddGroupModalForm {
  groupName: string;
}

function AddGroupModal({ isOpen, onClose }: AddGroupModalProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AddGroupModalForm>();

  console.log(errors);

  useEffect(() => {
    return () => {
      reset();
    };
  }, [isOpen]);

  const onValid = (date: AddGroupModalForm) => console.log(date);

  return (
    <Modal
      size='sm'
      isOpen={isOpen}
      onClose={onClose}
      closeIcon
      headerTitle={strings.AddGroup}
      buttonComponent={
        <Button onClick={handleSubmit(onValid)} type='blue' size='full'>
          {strings.Submit}
        </Button>
      }>
      <form>
        <UserFormInput
          {...register('groupName', {
            required: strings.ErrorRequiredGroupName,
          })}
          placeholder={strings.AddGroupPlaceholder}
          full
        />
      </form>
    </Modal>
  );
}

export default AddGroupModal;
