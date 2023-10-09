import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link data-test="demonas" href="/">
          Home
        </Link>{' '}
        | <Link href="/about">About</Link> |{' '}
        <Link href="/users">Users List</Link> |{' '}
        <a href="/api/users">Users API</a>
      </nav>
    </header>
    {children}
    <footer style={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
      <hr />
      <Link href="/">I'm here to stay (Footer)</Link>
    </footer>
  </div>
);

export default Layout;
