import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { SubmitHandler, useForm } from 'react-hook-form';
import Modal from '@components/Modal';
import Image from 'next/Image';
import { TopicOff, QnA, SmClose } from '@constants/icons';
import strings from '@constants/strings';
import writePostImg from '/public/image/writePost.png';
import { AvatarOn, AvatarOff, SmImage } from '@constants/icons';
import Button from '@components/Button';
import Tag from '@components/Tag';
import TextArea from '@components/TextArea/TextArea';
import CheckToggleButton from '@components/CheckToggleButton';
import useToggle from '@hooks/useToggle';
import Vote from '@components/Vote';
import Input from '@components/Input';
import UserRow from '@components/UserRow';
import BorderlessInput from '@components/BorderlessInput';

interface WritePostModalProps {
  size?: 'sm' | 'lg';
  isOpen: boolean;
  onClose: () => void;
  closeIcon?: boolean;
  backIcon?: boolean;
  headerButtonClick?: () => void;
  headerButtonLabel?: string;
  buttonComponent?: React.ReactNode;
  headerTitle?: string;

  [key: string]: any;
}

const tabs = [
  {
    id: 1,
    icon: <TopicOff className='mb-12' />,
    label: strings.TripTalk,
  },
  {
    id: 2,
    icon: <QnA className='mb-12' />,
    label: strings.Qna,
  },
];

const VoteItems = [
  {
    id: 1,
    value: '',
  },
  {
    id: 2,
    value: '',
  },
];

interface TripTalkForm {
  contents: string;
  tags: string[];
  photoAndVideo: FileList;
}

interface QnaForm {
  title: string;
  contents: string;
  // photos?: FileList;
  photos?: string[];
  vote?: any;
}

function WritePostModal({ isOpen, onClose, rest }: WritePostModalProps) {
  const {
    register,
    handleSubmit: tripTalkHandleSubmit,
    setValue: setTripTalkValue,
    watch,
    getValues,
    reset: resetTripTalkForm,
    formState: { errors },
  } = useForm<TripTalkForm>();

  const {
    register: qnaRegister,
    setValue: qnaSetvalue,
    handleSubmit: qnaHandleSubmit,
    reset: qnaReset,
    watch: qnaWatch,
  } = useForm<QnaForm>();

  const photoAndVideo = watch('photoAndVideo'); // 여행톡
  const photos = qnaWatch('photos') || []; // 질문 답변
  const currentTags = getValues('tags') || []; // 현재 입력된 태그(local)

  const [type, setType] = useState('');
  const [tag, setTag] = useState('');
  const [location, setLocation] = useState('');
  const [value, setValue] = useState('');
  const [vote, setToggle] = useToggle();
  const [tags, setTags] = useState<string[]>(getValues('tags') || []); // 태그 + 지역

  const [imgs, setImgs] = useState<FileList>();
  const [preview, setPreview] = useState<string[]>([]);

  // submit 할 때 이미지 업로드?
  // 여기서 cloudFare 업로드하고 url을 업데이트?
  useEffect(() => {
    if (photoAndVideo && photoAndVideo.length > 0) {
      const arr: string[] = [];
      Array.from(photoAndVideo).forEach(item => arr.push(URL.createObjectURL(item)));
      setPreview([...preview, ...arr]);
    }
  }, [photoAndVideo]);

  // useEffect(() => {
  //   if (photos && photos.length > 0) {
  //     const arr: string[] = [];
  //     Array.from(photos).forEach(item => arr.push(URL.createObjectURL(item)));
  //     setPreview([...preview, ...arr]);
  //   }
  // }, [photos]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, maxLength } = e.target;
    if (value.length > maxLength) return;
    setTag(value);
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, maxLength } = e.target;
    if (value.length > maxLength) return;
    setLocation(value);
  };

  // 기본 태그
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == 'Enter' && !!tag) {
      setTripTalkValue('tags', [...currentTags, tag]);
      setTag('');
      setTags(prevState => [...prevState, tag]);
    }
  };

  // 지역 태그
  const handleLocationKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == 'Enter' && !!location) {
      setTripTalkValue('tags', [...currentTags, location]);
      setLocation('');
      setTags(prevState => [...prevState, location]);
    }
  };

  const handleRemoveTag = (removeIndex: number) => {
    const filterTags = currentTags.filter((_, i) => i !== removeIndex);
    setTripTalkValue('tags', [...filterTags]);
    setTags(filterTags);
  };

  const handleClickBack = () => {
    setType('');
    setPreview([]);
    if (type === strings.Qna) {
      qnaReset();
    } else {
      resetTripTalkForm();
      setTags([]);
    }
  };

  const handleRemoveFile = (photoId: string) => {
    const filter = photos.filter(id => id !== photoId);
    qnaSetvalue('photos', filter);
  };

  // todo post 요청
  // todo vote 객체 포함
  const onValid = async (data: any) => console.log(data);

  const renderModalContent = () => {
    if (!type) {
      return (
        <>
          <div className='mb-24 flex space-x-12'>
            {tabs.map(tab => (
              <div
                key={tab.id}
                className={
                  'flex w-250 cursor-pointer flex-col items-center rounded-8 border-1 border-grey-3 py-22'
                }
                onClick={() => setType(tab.label)}>
                {tab.icon}
                <span className='text-h5'>{tab.label}</span>
              </div>
            ))}
          </div>
          <p className='h5 whitespace-pre-wrap text-center text-grey-8'>{strings.Precautions}</p>
          <div className='absolute bottom-0 right-0 left-0 h-140'>
            <Image src={writePostImg} placeholder='blur' />
          </div>
        </>
      );
    }

    if (type === strings.TripTalk) {
      return (
        <form className='relative flex-1 pb-52'>
          <div className='mb-16 space-y-14'>
            <UserRow buttonLabel={strings.WriteGuide} buttonClick={() => console.log('hi')} />
            <div className='flex items-center'>
              <AvatarOff className='mr-12' />
              <input
                className='h-24 flex-1 text-l1 outline-none'
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                maxLength={10}
                value={tag}
                placeholder={strings.AddTag}
              />
              <span className='text-h6 text-grey-6'>{tag.length}/10</span>
            </div>

            <div className='flex items-center'>
              <AvatarOff className='mr-12' />
              <input
                className='h-24 flex-1 text-l1 outline-none'
                onChange={handleLocationChange}
                onKeyPress={handleLocationKeyPress}
                maxLength={20}
                value={location}
                placeholder={strings.AddLocation}
              />
            </div>
          </div>

          {tags.length > 0 && (
            <div className='mb-16 flex flex-wrap'>
              {tags.map((tag, i) => (
                <Tag key={`${tag}_${i}`} label={tag} onRemove={() => handleRemoveTag(i)} />
              ))}
            </div>
          )}

          <div className='flex-1'>
            <TextArea
              placeholder={strings.TripTalkPlaceHolder}
              {...register('contents', {
                required: 'contents is required',
              })}
            />
          </div>

          {/*/!* todo  *!/*/}
          {/*{!_.isEmpty(preview) && (*/}
          {/*  <div className='flex flex-wrap gap-4'>*/}
          {/*    {preview.map(preview => (*/}
          {/*      <div key={preview} className='relative h-252 w-252'>*/}
          {/*        <Image src={preview} width={254} height={254} />*/}
          {/*        <button*/}
          {/*          type='button'*/}
          {/*          // onClick={handleReset}*/}
          {/*          className='absolute top-18 right-18 flex h-24 w-24 items-center justify-center rounded-12 bg-grey-2 opacity-40'>*/}
          {/*          <SmClose />*/}
          {/*        </button>*/}
          {/*      </div>*/}
          {/*    ))}*/}
          {/*  </div>*/}
          {/*)}*/}

          <div className='absolute bottom-0'>
            <label className='inline-flex cursor-pointer items-center rounded-64 bg-grey-1 py-8 px-12'>
              <SmImage className='mr-12 text-h5' />
              <span className='text-h5'>{strings.AddPhotoAndVideo}</span>
              {/* todo 수정 필요 */}
              <input
                {...register('photoAndVideo')}
                type='file'
                className='hidden'
                accept='image/&'
                multiple
              />
            </label>
          </div>
        </form>
      );
    }

    if (type === strings.Qna) {
      return (
        <form className='relative flex-1 pb-52'>
          <div className='space-y-16'>
            <UserRow
              rightComponent={
                <CheckToggleButton toggle={vote} onClick={setToggle} label={strings.AddVote} />
              }
            />

            <BorderlessInput
              className='w-full text-h2 outline-none'
              {...qnaRegister('title', {
                required: 'title is required',
              })}
              placeholder={strings.QnaPlaceHolder}
              onKeyDown={e => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                }
              }}
            />
            <div className='flex-1'>
              <TextArea
                {...qnaRegister('contents', {
                  required: 'title is required',
                })}
                placeholder={strings.TripTalkPlaceHolder}
              />
              {vote && <Vote className='mt-24' options={VoteItems} />}
            </div>
            {/*/!* todo  *!/*/}
            {/*{!_.isEmpty(preview) && (*/}
            {/*  <div className='flex flex-wrap gap-4'>*/}
            {/*    {preview.map(preview => (*/}
            {/*      <div key={preview} className='relative h-252 w-252'>*/}
            {/*        <Image src={preview} width={254} height={254} />*/}
            {/*        <button*/}
            {/*          type='button'*/}
            {/*          // onClick={handleReset}*/}
            {/*          className='absolute top-18 right-18 flex h-24 w-24 items-center justify-center rounded-12 bg-grey-2 opacity-40'>*/}
            {/*          <SmClose />*/}
            {/*        </button>*/}
            {/*      </div>*/}
            {/*    ))}*/}
            {/*  </div>*/}
            {/*)}*/}

            {!_.isEmpty(photos) && (
              <div className='flex flex-wrap gap-4'>
                {photos?.map(photoId => (
                  <div key={photoId} className='relative h-252 w-252'>
                    <Image
                      src={`https://imagedelivery.net/TQjToaViyjFv2GIO-4tZ_A/${photoId}/public`}
                      layout='fill'
                      objectFit='contain'
                    />
                    <button
                      type='button'
                      onClick={() => handleRemoveFile(photoId)}
                      className='absolute top-18 right-18 flex h-24 w-24 items-center justify-center rounded-12 bg-grey-2 opacity-40'>
                      <SmClose />
                    </button>
                  </div>
                ))}
              </div>
            )}

            <div className='absolute bottom-0'>
              <label className='inline-flex cursor-pointer items-center rounded-64 bg-grey-1 py-8 px-12'>
                <SmImage className='mr-12 text-h5' />
                <span className='text-h5'>{strings.AddPhoto}</span>
                <input
                  type='file'
                  onChange={async e => {
                    const imgIds: any = [];

                    for (const file of Array.from(e.target.files!)) {
                      const { uploadURL } = await (await fetch(`/api/files`)).json();
                      const formData = new FormData();
                      formData.append('file', file, file?.name + '');

                      const {
                        result: { id },
                      } = await (
                        await fetch(uploadURL, {
                          method: 'POST',
                          body: formData,
                        })
                      ).json();

                      imgIds.push(id);
                    }

                    qnaSetvalue('photos', [...photos, ...imgIds]);
                  }}
                  className='hidden'
                  accept='image/&'
                  multiple
                />
              </label>
            </div>
          </div>
        </form>
      );
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      headerTitle={!!type ? type : strings.Write}
      closeIcon={!type}
      backIcon={!!type}
      onClickBackIcon={type ? handleClickBack : null}
      headerButtonLabel={type && strings.WriteComplete}
      headerButtonClick={
        type
          ? type === strings.Qna
            ? qnaHandleSubmit(onValid)
            : tripTalkHandleSubmit(onValid)
          : null
      }
      {...rest}>
      {renderModalContent()}
    </Modal>
  );
}

export default WritePostModal;
