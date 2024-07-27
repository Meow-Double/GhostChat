import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { AsideMenu } from '@/components';

import { Footer, Navbar } from '../components';

import styles from './Layout.module.css';

export const Layout = () => {
  return (
    <>
      <Navbar />
      <main className={styles.wrapper}>
        <div className='container'>
          <div className={styles.inner}>
            <AsideMenu />
            <Suspense fallback={null}>
              <Outlet />
            </Suspense>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
