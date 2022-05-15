import type { NextPage } from 'next';
import { useEffect, useRef, useState } from 'react';
import Button from '@components/Button';
import KaKaoLoginButton from '@components/Button/KaKaoLoginButton';
import ToggleButton from '@components/ToggleButton';
import Input from '@components/Input';
import TextArea from '@components/TextArea/TextArea';
import useToggle from '@hooks/useToggle';
import ExeModal from '@components/Modal/ExeModal';
import useModal from '@hooks/useGlobalModal';
import useGlobalModal from '@hooks/useGlobalModal';

const Home: NextPage = () => {
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState('');
  const [visible, setVisible] = useToggle();
  // const ref = useRef<HTMLButtonElement>(null);
  // const ref = useRef<HTMLTextAreaElement>(null);
  const { showModal, hideModal } = useGlobalModal();

  const onClick = () => setVisible();

  const handleClickConfirmModal = () => {
    showModal({
      modalType: 'ConfirmModal',
      modalProps: {
        message: 'Confirm Modal',
        confirmText: 'Yes',
        cancelText: 'No',
        handleConfirm: () => {
          console.log('Yes!');
        },
        handleClose: () => hideModal(),
      },
    });
  };

  return (
    <div>
      <div className='flex flex-col'>
        <ExeModal
          isOpen={visible}
          onClose={setVisible}
          closeIcon
          buttonComponent={
            <Button onClick={onClick} type='blue' size='full'>
              Button
            </Button>
          }
          headerButtonLabel={'buttonasdfasdf'}
          headerButtonClick={() => console.log('header button click')}
        />

        <Input name='test' value={value} onChange={setValue} placeholder='text' reset full />
        <Input value={value} onChange={setValue} placeholder='text' />

        <TextArea value={value} onChange={setValue} placeholder='TextArea' />

        <KaKaoLoginButton />
        <ToggleButton value={toggle} onToggle={setToggle} />

        <div className='mb-10 flex w-700 items-end justify-between'>
          <Button onClick={handleClickConfirmModal} type='blue' size={56}>
            GlobalModal
          </Button>

          <Button onClick={onClick} type='blue' size={48}>
            Button
          </Button>

          <Button onClick={onClick} type='blue' size={32}>
            Button
          </Button>

          <Button onClick={onClick} type='blue' size={24}>
            Button
          </Button>
        </div>

        <div className='mb-10 flex w-700 items-end justify-between'>
          <Button onClick={onClick} type='black' size={56}>
            Button
          </Button>

          <Button onClick={onClick} type='black' size={48}>
            Button
          </Button>

          <Button onClick={onClick} type='black' size={32}>
            Button
          </Button>

          <Button onClick={onClick} type='black' size={24}>
            Button
          </Button>
        </div>

        <div className='mb-10 flex w-700 items-end justify-between'>
          <Button onClick={onClick} type='grey' size={56}>
            Button
          </Button>

          <Button onClick={onClick} type='grey' size={48}>
            Button
          </Button>

          <Button onClick={onClick} type='grey' size={32}>
            Button
          </Button>

          <Button onClick={onClick} type='grey' size={24}>
            Button
          </Button>
        </div>

        <div className='mb-10 flex w-700 items-end justify-between'>
          <Button onClick={onClick} type='skyBlue' size={56}>
            Button
          </Button>

          <Button onClick={onClick} type='skyBlue' size={48}>
            Button
          </Button>

          <Button onClick={onClick} type='skyBlue' size={32}>
            Button
          </Button>

          <Button onClick={onClick} type='skyBlue' size={24}>
            Button
          </Button>
        </div>

        <div className='mb-10 flex w-700 items-end justify-between'>
          <Button onClick={onClick} type='lightGrey' size={56}>
            Button
          </Button>

          <Button onClick={onClick} type='lightGrey' size={48}>
            Button
          </Button>

          <Button onClick={onClick} type='lightGrey' size={32}>
            Button
          </Button>

          <Button onClick={onClick} type='lightGrey' size={24}>
            Button
          </Button>
        </div>

        <div className='mb-10 flex w-700 items-end justify-between'>
          <Button onClick={onClick} type='blue-border' size={56}>
            Button
          </Button>

          <Button onClick={onClick} type='blue-border' size={48}>
            Button
          </Button>

          <Button onClick={onClick} type='blue-border' size={32}>
            Button
          </Button>

          <Button onClick={onClick} type='blue-border' size={24}>
            Button
          </Button>
        </div>

        <div className='mb-10 flex w-700 items-end justify-between'>
          <Button onClick={onClick} type='grey-border' size={56}>
            Button
          </Button>

          <Button onClick={onClick} type='grey-border' size={48}>
            Button
          </Button>

          <Button onClick={onClick} type='grey-border' size={32}>
            Button
          </Button>

          <Button onClick={onClick} type='grey-border' size={24}>
            Button
          </Button>
        </div>

        <div className='mb-10 flex w-700 items-end justify-between'>
          <Button onClick={onClick} type='text' size={56}>
            Button
          </Button>

          <Button onClick={onClick} type='text' size={48}>
            Button
          </Button>

          <Button onClick={onClick} type='text' size={32}>
            Button
          </Button>

          <Button onClick={onClick} type='text' size={24}>
            Button
          </Button>
        </div>

        <div className=' mb-10 flex w-700 items-end justify-between'>
          <Button onClick={onClick} type='arrow' size={56}>
            자세히 보기
          </Button>

          <Button onClick={onClick} type='arrow' size={48}>
            자세히 보기
          </Button>

          <Button onClick={onClick} type='arrow' size={32}>
            자세히 보기
          </Button>

          <Button onClick={onClick} type='arrow' size={24}>
            자세히 보기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
