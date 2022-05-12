import React from 'react';

interface ButtonProps {
  onClick: () => void | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void);
  className: string;
  disabled?: boolean;
  children?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ onClick, className, disabled, children }, ref) => {
    const handleOnClick = () => {
      onClick();
    };

    return (
      <button ref={ref} className={className} disabled={disabled} onClick={handleOnClick}>
        {children}
      </button>
    );
  },
);

export default Button;
