import React from 'react'
import Head from 'next/head'

const Page = () => (
  <>
    <Head>
      <title>Dados, Rabbets and Grooves | Sketchup for Woodworkers</title>
    </Head>
    <main className='up1'>
      <div className='p3'>
        <div className='mw-copy'>
          <h1 className='mb2 f-title t8'>Dados, Rabbets and Grooves</h1>
          <p className='mb1'>
            In this tutorial we rebuild our bookshelf with the shelves dadoed
            into the sides. We also rabbet the back on. I introduce the ‘guides’
            feature of the tape measure as well as several shortcuts for
            navigating around your model, more fun with groups and different
            ways to select exactly what you want.
          </p>
        </div>
        <p className='mb1'>
          Leave comments over on
          <a
            href='https://youtube.com/watch?v=pEcqfYVnyO0'
            className='underline'
          >
            YouTube
          </a>
          .
        </p>
        <div className='video mt3'>
          <iframe
            allowFullScreen={true}
            frameBorder='0'
            src='//www.youtube.com/embed/pEcqfYVnyO0'
          ></iframe>
        </div>
      </div>
    </main>
  </>
)

export default Page
