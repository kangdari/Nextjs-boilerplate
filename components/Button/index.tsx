import React from 'react';
import { cls } from '../../utils';
import { SmRight } from '@constants/icons';

type ButtonType =
  | 'blue'
  | 'blue-border'
  | 'skyBlue'
  | 'grey'
  | 'black'
  | 'grey-border'
  | 'lightGrey'
  | 'text'
  | 'arrow';

type ButtonSize = 56 | 48 | 32 | 24 | 'full';

interface ButtonProps {
  type?: ButtonType;
  size: ButtonSize;
  onClick: () => void | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void);
  className?: string;
  disabled?: boolean;
  children?: React.ReactNode;

  [key: string]: any;
}

const getTypeButton = (type: ButtonType) => {
  if (!type) return ``;

  if (type === 'text' || type === 'arrow') return `btn-${type}`;

  return `btn-${type}`;
};

const getButtonSize = (type: ButtonType, size: ButtonSize) => {
  if (!size) return '';

  if (type === 'text' || type === 'arrow') return `btn-${size}-text`;

  return `btn-${size}`;
};

const getDisabled = (type: ButtonType) => {
  switch (type) {
    case 'blue':
    case 'black':
      return `disabled-grey`;

    case 'grey':
    case 'lightGrey':
    case 'skyBlue':
      return `disabled-lightGrey`;

    case 'blue-border':
    case 'grey-border':
      return `disabled-border`;

    case 'arrow':
    case 'text':
      return `disabled-text`;

    default:
      return '';
  }
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ type = 'blue', size, onClick, className = '', disabled, children, ...rest }, ref) => {
    const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      onClick();
    };

    return (
      <button
        type='button'
        ref={ref}
        className={cls(
          className,
          getTypeButton(type),
          getButtonSize(type, size),
          disabled ? getDisabled(type) : '',
          'flex items-center justify-center',
        )}
        disabled={disabled}
        onClick={handleOnClick}
        {...rest}>
        {children} {type === 'arrow' && <SmRight className='' />}
      </button>
    );
  },
);

export default Button;
