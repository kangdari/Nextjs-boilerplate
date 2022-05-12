import type { NextPage } from 'next';
import { useEffect, useRef } from 'react';
import Button from '@components/Button';

const Home: NextPage = () => {
  const ref = useRef<HTMLButtonElement>(null);

  const onClick = () => console.log('555');

  return (
    <div>
      <div className='flex flex-col'>
        <h1 className='text-50'>h1h1h11h</h1>

        <div className='mb-10 flex items-end'>
          <Button ref={ref} onClick={onClick} className='btn-56 btn-blue'>
            버튼이지롱
          </Button>

          <Button onClick={onClick} disabled className='btn-56 btn-blue'>
            disabled
          </Button>

          <button onClick={onClick} disabled className='btn-48 btn-blue'>
            button
          </button>

          <button onClick={onClick} disabled className='btn-32 btn-blue'>
            button
          </button>

          <button onClick={onClick} disabled className='btn-24 btn-blue'>
            button
          </button>
        </div>

        <div className='mb-10 flex items-end'>
          <button onClick={onClick} disabled className='btn-56 btn-black'>
            button
          </button>

          <button onClick={onClick} disabled className='btn-48 btn-black'>
            button
          </button>

          <button onClick={onClick} disabled className='btn-32 btn-black'>
            button
          </button>

          <button onClick={onClick} disabled className='btn-24 btn-black'>
            button
          </button>
        </div>

        <div className='mb-10 flex items-end'>
          <button onClick={onClick} disabled className='btn-56 btn-grey'>
            button
          </button>

          <button onClick={onClick} disabled className='btn-48 btn-grey'>
            button
          </button>

          <button onClick={onClick} disabled className='btn-32 btn-grey'>
            button
          </button>

          <button onClick={onClick} disabled className='btn-24 btn-grey'>
            button
          </button>
        </div>

        <div className='mb-10 flex items-end'>
          <button onClick={onClick} disabled className='btn-56 btn-skyBlue'>
            button
          </button>

          <button onClick={onClick} disabled className='btn-48 btn-skyBlue'>
            button
          </button>

          <button onClick={onClick} disabled className='btn-32 btn-skyBlue'>
            button
          </button>

          <button onClick={onClick} disabled className='btn-24 btn-skyBlue'>
            button
          </button>
        </div>

        <div className='mb-10 flex items-end'>
          <button onClick={onClick} disabled className='btn-56 btn-lightGrey'>
            button
          </button>

          <button onClick={onClick} disabled className='btn-48 btn-lightGrey'>
            button
          </button>

          <button onClick={onClick} disabled className='btn-32 btn-lightGrey'>
            button
          </button>

          <button onClick={onClick} disabled className='btn-24 btn-lightGrey'>
            button
          </button>
        </div>

        <div className='mb-10 flex items-end'>
          <button onClick={onClick} disabled className='btn-56 btn-blue-border'>
            button
          </button>

          <button onClick={onClick} disabled className='btn-48 btn-blue-border'>
            button
          </button>

          <button onClick={onClick} disabled className='btn-32 btn-blue-border'>
            button
          </button>

          <button onClick={onClick} disabled className='btn-24 btn-blue-border'>
            button
          </button>
        </div>

        <div className='mb-10 flex items-end'>
          <button onClick={onClick} disabled className='btn-56 btn-grey-border'>
            button
          </button>

          <button onClick={onClick} disabled className='btn-48 btn-grey-border'>
            button
          </button>

          <button onClick={onClick} disabled className='btn-32 btn-grey-border'>
            button
          </button>

          <button onClick={onClick} disabled className='btn-24 btn-grey-border'>
            button
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
