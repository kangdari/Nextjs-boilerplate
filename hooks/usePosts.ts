import axios from 'axios';
import { useQuery } from 'react-query';

const fetchPosts = async (limit = 10) => {
  const { data } = await axios('https://jsonplaceholder.typicode.com/posts');
  return data.filter((x: any) => x.id <= limit);
};

function usePosts<T, E>(limit: number) {
  return useQuery<T, E>(['posts', limit], () => fetchPosts(limit));
}

export { usePosts, fetchPosts };
