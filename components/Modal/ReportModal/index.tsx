import React, { useEffect, useState } from 'react';
import Modal from '@components/Modal';
import strings from '@constants/strings';
import RadioGroup from '@components/RadionGroup';
import Button from '@components/Button';

interface ReportModalProps {
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

const ReportOptions = [
  {
    id: 1,
    value: '신고 1',
    label: '신고 1',
  },
  {
    id: 2,
    value: '신고 2',
    label: '신고 2',
  },
  {
    id: 3,
    value: '신고 3',
    label: '신고 3',
  },
];

function ReportModal({ isOpen, onClose }: ReportModalProps) {
  const [value, setValue] = useState('');

  useEffect(() => {
    return () => {
      setValue('');
    };
  }, [isOpen]);

  const handleClick = () => console.log('신고 api');

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      closeIcon
      headerTitle={strings.Report}
      buttonComponent={
        <Button onClick={handleClick} type='blue' size='full'>
          {strings.Submit}
        </Button>
      }>
      <h2 className='mb-24 text-h2'>{strings.ReportTitle}</h2>
      <RadioGroup value={value} setRadio={setValue} options={ReportOptions} />
    </Modal>
  );
}

export default ReportModal;
