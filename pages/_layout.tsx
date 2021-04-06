import React from 'react'
import Head from 'next/head'
import Header from '../src/components/Header'

const Layout: React.FC<{}> = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Sketchup for Woodworkers</title>
        <meta
          content='The internet&#39;s FREE leading online resource for learning Sketchup that is built and run by woodworkers for woodworkers.'
          name='description'
        />
        <meta
          content='woodworking,wood,cad,build,layout,sketchup,tutorials,learning,furniture,design'
          name='keywords'
        />
        <meta content='width=device-width, initial-scale=1' name='viewport' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Cardo:ital@0;1&family=Roboto:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap'
          rel='stylesheet'
        />
      </Head>

      <Header />

      <main className='container mx-auto px-4'>{children}</main>

      <footer className='flex flex-center maple c-txt-walnut'>
        <p className='p2 center'>
          Sketchup for Woodworkers is &copy;2020&nbps;
          <a className='underline' href='//zthall.com'>
            Zack Hall
          </a>
        </p>
      </footer>
    </div>
  )
}

export default Layout
