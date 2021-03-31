import React from 'react'
import Head from 'next/head'

const Page = () => (
  <>
    <Head>
      <title>Dimensions and Printing | Sketchup for Woodworkers</title>
    </Head>
    <div className='p3'>
      <div className='mw-copy'>
        <h1 className='mb2 f-title t8'>Dimensions and Printing</h1>
        <p className='mb1'>
          In this tutorial we see how to add dimensions to our drawings, how to
          set them up to print and add scenes so we can save “views” of our
          model for later.
        </p>
        <p className='mb1'>
          Leave comments over on
          <a
            href='https://youtube.com/watch?v=89SqAnNeH9g'
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
          src='//www.youtube.com/embed/89SqAnNeH9g'
        ></iframe>
      </div>
    </div>
  </>
)

export default Page
