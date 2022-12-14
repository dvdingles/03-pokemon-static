import Head from 'next/head'
// import { FC } from 'react';


export const Layout /* : FC */ = ({ children }) => {
  return (
    <>
      <Head>
        <title>David Inglés</title>
        <meta name='Author' content='David Inglés' />
        <meta name='description' content='Cajas de cartón y diseño gráfico' />
        <meta name='Keywords' content='carton, auxiliar, david' />
      </Head>

      {/* Navbar */}

      <main>
        { children }
      </main>
    </>
  )
}
