import React from 'react'
import Head from 'next/head'

const Page = () => (
  <>
    <Head>
      <title>Getting Started, Part 2 | Sketchup for Woodworkers</title>
    </Head>
    <div className='p3'>
      <div className='mw-copy'>
        <h1 className='mb2 f-title t8'>Getting Started, Part 2</h1>
        <p className='mb1'>
          The second half of our Getting Started tutorial. In this tutorial we
          build a bookshelf using the tools we already learned, plus the tape
          measure and move/copy tool. We also start grouping our object.
        </p>
        <p className='mb1'>
          <strong>Note</strong> As Dave points out in
          <a href='http://lumberjocks.com/topics/6287' target='_blank'>
            this thread
          </a>
          you actually use Ctrl to make a copy on a PC. I say “Alt” in the
          video, which is true for the Mac, and I thought Windows was the same.
          Sorry!
        </p>
        <p className='mb1'>
          Leave comments over on
          <a
            href='https://youtube.com/watch?v=T9W6HdTPVWA'
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
          src='//www.youtube.com/embed/T9W6HdTPVWA'
        ></iframe>
      </div>
    </div>
  </>
)

export default Page
