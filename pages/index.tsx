import type { NextPage } from 'next';
import Image from 'next/image';
import Radio from 'public/icon/radioOn.svg';

const Home: NextPage = () => {
  return (
    <div>
      <div>
        {/*<h1 className='text-32 text-grey-10 '>Hello world!</h1>*/}
        {/*<h1 className='text-32 text-grey-10 '>헬로우 월드</h1>*/}
        {/*<h1 className='text-32 font-bold text-grey-10 '>Display 1</h1>*/}
        <Radio />
        <Image src='/icon/radioOn.svg' width={24} height={24} />
      </div>
    </div>
  );
};

export default Home;
