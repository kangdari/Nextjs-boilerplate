import React, { useState } from 'react';
import { cls } from '@utils/index';
import Input from '@components/Input';
import strings from '@constants/strings';
import { Add, Close } from '@constants/icons';

interface VoteItem {
  id: number;
  value: string;
}

interface VoteProps {
  options: VoteItem[]; // 투표 아이템
  className?: string;
  limit?: number; // 투표 옵션 최대 개수
}

function Vote({ className, options, limit = 4 }: VoteProps) {
  // const [items, setItems] = useState(options);
  const [items, setItems] = useState(options);
  const [len, setLen] = useState(options.length);

  const onAddVoteItem = () => {
    setItems(prevState => [
      ...prevState,
      {
        id: len + 1,
        value: '',
      },
    ]);
    setLen(prevState => prevState + 1);
  };

  const handleChange = (value: string, name?: string) => {
    const updateItems = items.map(item => {
      if (String(item.id) === name) {
        return {
          id: item.id,
          value,
        };
      }
      return item;
    });
    setItems(updateItems);
  };

  const handleRemoveItem = (id: number) => {
    const filterItems = items.filter(item => item.id !== id);
    const updateIndexItems = filterItems.map((item, index) => {
      return {
        ...item,
        id: index + 1,
      };
    });

    setItems(updateIndexItems);
    setLen(prevState => prevState - 1);
  };

  return (
    <div className={cls('space-y-12', `${className}`)}>
      {items.map((item, index) => (
        <div className='relative' key={index}>
          <Input
            name={String(item.id)}
            full
            numberLabel={item.id}
            onChange={handleChange}
            value={items[index]?.value || ''}
            placeholder={strings.VotePlaceHolder}
          />
          {items.length > 2 && (
            <Close
              className='absolute right-16 top-16 cursor-pointer'
              onClick={() => handleRemoveItem(item.id)}
            />
          )}
        </div>
      ))}

      {limit > items.length && (
        <div
          className='inline-flex cursor-pointer items-center rounded-8 bg-grey-2 px-10 py-8'
          onClick={onAddVoteItem}>
          <Add className='mr-8' />
          <span className='text-l4 text-grey-8'>{strings.AddVoteItem}</span>
        </div>
      )}
    </div>
  );
}

export default Vote;
