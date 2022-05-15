import React from 'react';
import Head from 'next/head';

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

function Layout({ title, children }: LayoutProps) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </div>
  );
}

export default Layout;
