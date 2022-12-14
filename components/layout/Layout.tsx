import Head from 'next/head'
import { FC } from 'react';
import { PropsWithChildren } from 'react';
import { Navbar } from '../ui/navbar/Navbar';
import styles from './Layout.module.css'

type Props = {
  children?: React.ReactNode,
  title?: string,
};

export const Layout : /* FC<Props> */ FC<PropsWithChildren<Props>> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{ title || 'David Inglés'}</title>
        <meta name='Author' content='David Inglés' />
        <meta name='description' content={`cajas de cartón echas por ${ title }`} />
        <meta name='Keywords' content={`carton, auxiliar, diseñado por ${ title }`} />
      </Head>
      <Navbar />
      {/* Navbar */}

      <main className={styles.main}>
        { children }
      </main>
    </>
  )
}

