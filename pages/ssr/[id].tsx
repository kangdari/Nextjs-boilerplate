import React from 'react';
import { useRouter } from 'next/router';
import { dehydrate, QueryClient } from 'react-query';
import { fetchPosts, usePosts } from '../../hooks/usePosts';
import Link from 'next/link';

interface Post {
  title: string;
  body: string;
  id: number;
}

function Ssr() {
  const { isLoading, error, data } = usePosts<Post[], Error>(10);
  const router = useRouter();
  const { id } = router.query;
  const idx = Number(id) - 1;

  if (isLoading) return <div>Loading</div>;
  if (error) return 'An error has occurred: ' + error?.message;
  return (
    <div className='Detail'>
      <Link href='/'>
        <a>index로</a>
      </Link>
      {data && (
        <>
          <h1>{data[idx].title}</h1>
          <p>{data[idx].body}</p>
          <p>{data[idx].id}번째 게시글</p>
        </>
      )}
    </div>
  );
}

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('posts', () => fetchPosts(10));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default Ssr;
