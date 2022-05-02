import type { NextPage } from 'next';
import { useDispatch } from 'react-redux';
import { savePost } from '../store/slice/post';
import { useAppSelector } from '../hooks/useSelector';

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const { content } = useAppSelector(state => state.post);
  console.log(content);
  const onChange = (e: any) => {
    dispatch(savePost(e.target.value));
  };

  return (
    <div className=''>
      <input type='text' onChange={onChange} />
      <h1 className='text-32 text-grey-1'>Hello world!</h1>
      <h1 className='text-32 text-grey-2'>Hello world!</h1>
      <h1 className='text-32 text-grey-3'>Hello world!</h1>
      <h1 className='text-32 text-grey-4'>Hello world!</h1>
      <h1 className='text-32 text-grey-5'>Hello world!</h1>
      <h1 className='text-32 text-grey-6'>Hello world!</h1>
      <h1 className='text-32 text-grey-7'>Hello world!</h1>
      <h1 className='text-32 text-grey-8'>Hello world!</h1>
      <h1 className='text-32 text-grey-9'>Hello world!</h1>
      <h1 className='text-32 text-grey-10'>Hello world!</h1>
      <h1 className='text-32 text-grey-11'>Hello world!</h1>
      <h1 className='text-32 text-grey-12'>Hello world!</h1>

      <h1 className='text-32 text-blue-1'>YEOMI BLUE</h1>
      <h1 className='text-32 text-blue-2'>YEOMI BLUE</h1>
      <h1 className='text-32 text-blue-3'>YEOMI BLUE</h1>
      <h1 className='text-32 text-blue-4'>YEOMI BLUE</h1>
      <h1 className='text-32 text-blue-5'>YEOMI BLUE</h1>
      <h1 className='text-32 text-blue-6'>YEOMI BLUE</h1>
      <h1 className='text-32 text-blue-7'>YEOMI BLUE</h1>
      <h1 className='text-32 text-blue-8'>YEOMI BLUE</h1>
    </div>
  );
};

export default Home;
