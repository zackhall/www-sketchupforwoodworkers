import React from 'react'
import Head from 'next/head'

const Page = () => (
  <>
    <Head>
      <title>Joints, Joints, Joints | Sketchup for Woodworkers</title>
    </Head>
    <div className='p3'>
      <div className='mw-copy'>
        <h1 className='mb2 f-title t8'>Joints, Joints, Joints</h1>
        <p className='mb1'>
          In this tutorial I cover several of the most common woodworking
          joints—miter, half-lap, tongue and groove, splined, rabbet and groove,
          blind dado, sliding dovetail, mortise and tenon, and the good
          old-fashioned dovetail.
        </p>
        <p className='mb1'>
          If there any more you’d like to see just leave a comment and I’ll do
          an additional video in the future covering those as well.
        </p>
        <p className='mb1'>
          I realize my rabbet and groove ended up being more of a rabbet and
          rabbet!
        </p>
        <p className='mb1'>
          Leave comments over on
          <a
            href='https://youtube.com/watch?v=hjiKuJ03DbI'
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
          src='//www.youtube.com/embed/hjiKuJ03DbI'
        ></iframe>
      </div>
    </div>
  </>
)

export default Page
