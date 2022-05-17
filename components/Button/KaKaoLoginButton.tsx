import React from 'react';
import strings from '@constants/strings';
import { cls } from '@utils/index';

interface KaKaoLoginButtonProps {
  className?: string;
  onClick: () => void;
}

function KaKaoLoginButton({ className = '', onClick }: KaKaoLoginButtonProps) {
  const handleClick = () => {
    onClick();
  };

  return (
    <button
      type='button'
      className={cls(
        className,
        `relative w-full min-w-335 max-w-385  rounded-8 bg-yellow py-16 text-l2 text-grey-11`,
      )}
      onClick={handleClick}>
      {/* todo 크기 조절 필요 */}
      {/*<Kakao className='absolute left-25' />*/}
      {strings.KakaoLogin}
    </button>
  );
}

export default KaKaoLoginButton;
