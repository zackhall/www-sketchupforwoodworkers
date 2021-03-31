import React from 'react'
import Head from 'next/head'

const Page = () => (
  <>
    <Head>
      <title>Getting Started, Part 1 | Sketchup for Woodworkers</title>
    </Head>
    <div className='p3'>
      <div className='mw-copy'>
        <h1 className='mb2 f-title t8'>Getting Started, Part 1</h1>
        <p className='mb1'>
          In this tutorial we learn how to setup Sketchup from the beginning to
          work best for modeling furniture and cabinets. I introduce the
          rectangle, push/pull, orbit, pan, and zoom tools.
        </p>
        <p className='mb2'>
          In order to really see what’s going on, try making the video
          full-screen by clicking the little TV icon.
        </p>
        <p className='mb1'>
          <strong>Note</strong> These tutorials are made with Sketchup 7. There
          have been a couple of releases since these were made and even a
          version that runs completely in your browser.
        </p>
        <p className='mb1'>
          Leave comments over on
          <a
            href='https://youtube.com/watch?v=xPHcnIJhcT0'
            className='underline'
          >
            YouTube
          </a>
          .
        </p>
      </div>
      <div className='video mt3'>
        <iframe
          allowFullScreen={true}
          frameBorder='0'
          src='//www.youtube.com/embed/xPHcnIJhcT0'
        ></iframe>
      </div>
    </div>
  </>
)

export default Page
