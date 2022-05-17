import React, { useState } from 'react';
import Modal from '@components/Modal';
import Image from 'next/Image';
import { TopicOff, QnA } from '@constants/icons';
import strings from '@constants/strings';
import writePostImg from '/public/image/writePost.png';
import { AvatarOn, AvatarOff, SmImage } from '@constants/icons';
import Button from '@components/Button';
import Tag from '@components/Tag';
import TextArea from '@components/TextArea/TextArea';
import CheckToggleButton from '@components/CheckToggleButton';
import useToggle from '@hooks/useToggle';
import Vote from '@components/Vote';

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

// todo
// backButton click => state reset

function WritePostModal({ isOpen, onClose, rest }: WritePostModalProps) {
  const [type, setType] = useState('');
  const [tag, setTag] = useState('');
  const [location, setLocation] = useState('');
  const [value, setValue] = useState('');
  const [vote, setToggle] = useToggle();

  const [tags, setTags] = useState<string[]>([]); // 태그 + 지역

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

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == 'Enter') {
      setTags(prevState => [...prevState, tag]);
      setTag('');
    }
  };

  const handleLocationKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == 'Enter') {
      setTags(prevState => [...prevState, location]);
      setLocation('');
    }
  };

  const handleRemoveTag = (removeIndex: number) => {
    const filterTags = tags.filter((_, i) => i !== removeIndex);
    setTags(filterTags);
  };

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
        <div className='flex-1'>
          <div className='mb-16 space-y-14'>
            <div className='flex items-center'>
              <AvatarOn className='mr-12' />
              <p className='flex-1 text-h5'>User NickName</p>
              <Button
                className='ml-auto'
                type='grey'
                size={32}
                onClick={() => console.log('글쓰기 안내')}>
                {strings.WriteGuide}
              </Button>
            </div>

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

          <div className='min-h-335 flex-1'>
            <TextArea onChange={setValue} value={value} placeholder={strings.TripTalkPlaceHolder} />
          </div>

          <div className='mt-auto mt-24'>
            <div className='inline-flex cursor-pointer items-center rounded-64 bg-grey-1 py-8 px-12'>
              <SmImage className='mr-12 text-h5' />
              <span className='text-h5'>{strings.AddPhotoAndVideo}</span>
            </div>
          </div>
        </div>
      );
    }

    if (type === strings.Qna) {
      return (
        <div className='flex-1'>
          <div className='space-y-16'>
            <div className='flex items-center'>
              <AvatarOn className='mr-12' />
              <p className='flex-1 text-h5'>User NickName</p>
              <CheckToggleButton toggle={vote} onClick={setToggle} label={strings.AddVote} />
            </div>

            <input
              type='text'
              className='w-full text-h2 outline-none'
              placeholder={strings.QnaPlaceHolder}
            />

            <div className='min-h-385 flex-1'>
              <TextArea
                onChange={setValue}
                value={value}
                placeholder={strings.TripTalkPlaceHolder}
              />
              {vote && <Vote className='mt-24' options={VoteItems} />}
            </div>

            <div className='mt-auto mt-24'>
              <div className='inline-flex cursor-pointer items-center rounded-64 bg-grey-1 py-8 px-12'>
                <SmImage className='mr-12 text-h5' />
                <span className='text-h5'>{strings.AddPhoto}</span>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <Modal
      isOpen={true}
      // isOpen={isOpen}
      onClose={onClose}
      headerTitle={!!type ? type : strings.Write}
      closeIcon={!type}
      backIcon={!!type}
      onClickBackIcon={type ? () => setType('') : null}
      headerButtonLabel={type && strings.WriteComplete}
      headerButtonClick={type ? () => console.log('complete') : null}
      {...rest}>
      {renderModalContent()}
    </Modal>
  );
}

export default WritePostModal;
