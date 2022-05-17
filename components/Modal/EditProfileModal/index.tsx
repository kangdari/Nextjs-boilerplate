import React from 'react';
import Modal, { ModalProps } from '@components/Modal';
import Image from 'next/Image';
import { useFieldArray, useForm } from 'react-hook-form';
import strings from '@constants/strings';
import ProfileBg from '/public/image/profileBg.png';
import { AvatarOff, Camera } from '@constants/icons';
import UserFormInput from '@components/UserFormInput';
import TextArea from '@components/TextArea/TextArea';

interface EditProfileModalProps extends ModalProps {}

interface EditProfileForm {
  bgImg: string;
  profileImg: string;
  nickName: string;
  desc: string;
  // sns?: string;
  // snsAddr?: string;
  travelDestination?: any;
}

// todo img upload 필요
function EditProfileModal({ isOpen, onClose }: EditProfileModalProps) {
  // todo defaultValues => 기본 정보 설정 필요
  const { register, reset, handleSubmit, control } = useForm<EditProfileForm>({
    defaultValues: {
      bgImg: '',
      profileImg: '',
      nickName: '닉네임',
      desc: '',
      travelDestination: [1, 2, 3],
    },
  });
  const { fields } = useFieldArray({
    control,
    name: 'travelDestination',
  });

  const onValid = (data: EditProfileForm) => console.log(data);

  return (
    <Modal
      isOpen={true}
      onClose={onClose}
      closeIcon
      headerTitle={strings.EditProfile}
      headerButtonLabel={strings.EditComplete}
      headerButtonClick={handleSubmit(onValid)}
      noPadding>
      <form className='relative'>
        <div className='mb-72 h-172 w-full'>
          <div className='relative h-[100%] w-[100%]'>
            <Image src={ProfileBg} layout='fill' />
            <Camera className='absolute bottom-24 right-24 cursor-pointer' />
          </div>
        </div>

        <div className='absolute left-[230px] top-122'>
          {/*  todo userProfileImg 컴포넌트화 */}
          <div className='relative '>
            <AvatarOff width={100} height={100} />
            <Camera className='absolute bottom-0 right-0 cursor-pointer' />
          </div>
        </div>

        <div className='space-y-24 px-24 pb-24'>
          <div>
            <span className='mb-8 inline-block text-h4'>닉네임</span>
            <UserFormInput
              {...register('nickName', {
                required: '닉네임을 입력해 주세요',
              })}
            />
          </div>

          <div>
            <span className='mb-8 inline-block text-h4'>자기소개</span>
            <TextArea
              {...register('desc', {
                required: '자기소개 입력해 주세요',
              })}
              border
            />
          </div>

          <div>
            <span className='mb-8 inline-block text-h4'>가장 떠나고 싶은 여행지</span>
            <div className='space-y-12'>
              {fields.map((field, index) => (
                <UserFormInput
                  key={field.id}
                  {...register(`travelDestination.${index}.value`)}
                  numberLabel={index + 1}
                  placeholder={`${index + 1}${strings.placeholderDestination}`}
                />
              ))}
            </div>
          </div>
        </div>
      </form>
    </Modal>
  );
}

export default EditProfileModal;
