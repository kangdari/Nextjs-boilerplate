import React, { useState } from 'react';
import Modal from '@components/Modal';
import KaKaoLoginButton from '@components/Button/KaKaoLoginButton';
import useToggle from '@hooks/useToggle';
import strings from '@constants/strings';
import Button from '@components/Button';
import Input from '@components/Input';
import AddiInfos from '@components/Modal/SignUpModal/components/AddiInfos';

interface SignUpModalProps {
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

// 키값이 같으면 렌더링 ?
// 값은 formick, useForm 으로 관리

function SignUpModal({ isOpen, onClose, ...rest }: SignUpModalProps) {
  const [loading, setLoading] = useToggle();
  const [logged, setLogged] = useToggle();
  const [headerTitle, setHeaderTitle] = useState(strings.Login);

  const handleLogin = async () => {
    setLoading();
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLogged();
    setLoading();
    setHeaderTitle(strings.AddiInfo);
  };

  // const renderAddiInfo = () => {
  //   return (
  //     <div>
  //       {/*<h2 className='mb-24 whitespace-pre-wrap text-h2'>{`여행가님이 활동하실 닉네임을\n알려주세요`}</h2>*/}
  //       {/*<Input full onChange={() => {}} value={''} placeholder={strings.NickName} />*/}
  //       <h2 className='mb-24 whitespace-pre-wrap text-h2'>{`여행가님이 활동하실 닉네임을\n알려주세요`}</h2>
  //       <Input full onChange={() => {}} value={''} placeholder={strings.NickName} />
  //       당장 내일 떠날 수 있다고 하면 가장 떠나고 싶은 여행지가 있을까요?
  //     </div>
  //   );
  // };

  return (
    <Modal
      noPadding={!logged}
      isOpen={isOpen}
      onClose={onClose}
      headerTitle={headerTitle}
      buttonComponent={
        logged && (
          <Button size='full' onClick={() => {}}>
            다음
          </Button>
        )
      }
      {...rest}>
      {!logged ? (
        <div className='flex flex-1 flex-col items-center justify-between px-50 pt-72 pb-32'>
          <h2 className='text-bold mb-72 text-h2'>{strings.LoginTitle}</h2>

          <div className='mb-100 flex flex-col justify-center space-y-16'>
            <KaKaoLoginButton onClick={handleLogin} />
            {loading && <p>loading...</p>}
          </div>
          <p style={{ wordBreak: 'keep-all' }} className=' text-center text-b3 text-grey-7'>
            {strings.LoginDesc}
          </p>
        </div>
      ) : (
        <AddiInfos />
        // <>{renderAddiInfo()}</>
      )}
    </Modal>
  );
}

export default SignUpModal;
