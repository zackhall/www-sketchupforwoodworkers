import React from 'react'
import { Helmet } from 'react-helmet'

const Page = () => (
  <>
    <Helmet>
      <title>
        Curves, Moulding and the Outliner | Sketchup for Woodworkers
      </title>
    </Helmet>
    <div className='p3'>
      <div className='mw-copy'>
        <h1 className='mb2 f-title t8'>Curves, Moulding and the Outliner</h1>
        <p className='mb1'>
          In this tutorial I introduce the Outliner panel for keeping track of
          all these groups floating around. We also rebuild the bookshelf using
          Components. I use the Line, Arc and FollowMe tools for the first time
          to create moulding on our bookshelf.
        </p>
        <p className='mb1'>
          Leave comments over on
          <a
            href='https://youtube.com/watch?v=b905KRSvH2g'
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
          src='//www.youtube.com/embed/b905KRSvH2g'
        ></iframe>
      </div>
    </div>
  </>
)

export default Page
