import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { wrapper } from '../store';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import GlobalModal from '@components/GlobalModal';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
        <GlobalModal />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default wrapper.withRedux(MyApp);
