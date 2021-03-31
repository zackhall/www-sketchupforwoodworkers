import React from 'react'
import Head from 'next/head'

const Page = () => (
  <>
    <Head>
      <title>Moulding Revisited | Sketchup for Woodworkers</title>
    </Head>
    <div className='p3'>
      <div className='mw-copy'>
        <h1 className='mb2 f-title t8'>Moulding Revisited</h1>
        <p className='mb1'>
          I wanted to show a couple more examples of moulding—adding base
          moulding and an example of cutting away from a larger piece to form a
          decorative edge.
        </p>
        <p className='mb1'>
          Leave comments over on
          <a
            href='https://youtube.com/watch?v=dBk8MsWqQBw'
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
          src='//www.youtube.com/embed/dBk8MsWqQBw'
        ></iframe>
      </div>
    </div>
  </>
)

export default Page
