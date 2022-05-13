import React from 'react';
import Kakao from '@icon/kakao.svg';
import strings from '@constants/strings';

interface KaKaoLoginButtonProps {}

function KaKaoLoginButton({}: KaKaoLoginButtonProps) {
  const onClick = () => console.log('login');

  return (
    <button
      type='button'
      className='relative w-full min-w-335 max-w-385  rounded-8 bg-yellow py-16 text-l2 text-grey-11'
      onClick={onClick}>
      {/* todo 크기 조절 필요 */}
      <Kakao className='absolute left-25  z-10' />
      {strings.KakaoLogin}
    </button>
  );
}

export default KaKaoLoginButton;
