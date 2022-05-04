import type { NextPage } from 'next';
import { useDispatch } from 'react-redux';
import { savePost } from '../store/slice/post';
import { useAppSelector } from '../hooks/useSelector';
import { fetchPosts, usePosts } from '../hooks/usePosts';
import { dehydrate, QueryClient, useQuery } from 'react-query';

interface Post {
  title: string;
  body: string;
  id: number;
}

const Home: NextPage = () => {
  // const dispatch = useDispatch();
  // const { content } = useAppSelector(state => state.post);
  // const onChange = (e: any) => {
  //   dispatch(savePost(e.target.value));
  // };

  // const {} = useQuery('posts', () => fetchPosts(10));
  const { data, isLoading, error } = usePosts<Post[], Error>(10);

  // console.log(data);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{`Error: ${error}`}</div>;

  return (
    <div className=''>
      {/*<input type='text' onChange={onChange} />*/}
      <h1 className='text-32 text-grey-1'>Hello world!</h1>
      {data?.map((item: any) => (
        <div>{item.title}</div>
      ))}
    </div>
  );
};

// 각 페이지 요청에 대해 새 QueryClient 인스턴스 를 만듭니다. 이렇게 하면 사용자와 요청 간에 데이터가 공유되지 않습니다.
export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('posts', () => fetchPosts());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      // dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
}

export default Home;
