import React from 'react';
import Modal, { ModalProps } from '@components/Modal';
import strings from '@constants/strings';
import UserRow from '@components/UserRow';
import TextArea from '@components/TextArea/TextArea';
import { useForm } from 'react-hook-form';

interface TopicSuggestionModalProps extends ModalProps {}

interface TopicSuggestionForm {
  title: string;
  contents: string;
}

function TopicSuggestionModal({ isOpen, onClose }: TopicSuggestionModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TopicSuggestionForm>();

  console.log(errors);

  const onValid = (data: TopicSuggestionForm) => console.log(data);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      closeIcon
      headerTitle={strings.TopicSuggestion}
      headerButtonLabel={strings.WriteComplete}
      headerButtonClick={handleSubmit(onValid)}>
      <form className='space-y-16'>
        <UserRow />
        <input
          type='text'
          {...register('title', {
            required: strings.ErrorRequiredTitle,
          })}
          className='w-full text-h2 outline-none'
          placeholder={strings.TopicSuggestionContentsPlaceholder}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              e.preventDefault();
            }
          }}
        />
        <TextArea
          {...register('contents', {
            required: strings.ErrorRequiredContents,
          })}
          placeholder={strings.TripTalkPlaceHolder}
        />
      </form>
    </Modal>
  );
}

export default TopicSuggestionModal;
