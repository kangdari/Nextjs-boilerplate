import type { NextPage } from 'next';
import { useDispatch } from 'react-redux';
import { savePost } from '../store/slice/post';
import { useAppSelector } from '../hooks/useSelector';

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const { content } = useAppSelector(state => state.post);
  const onChange = (e: any) => {
    dispatch(savePost(e.target.value));
  };

  return (
    <div className=''>
      <input type='text' onChange={onChange} />
      <h1 className='text-32 text-grey-1'>Hello world!</h1>
    </div>
  );
};

export default Home;
