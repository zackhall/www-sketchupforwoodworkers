import react from 'react'
import { Helmet } from 'react-helmet'

const Layout: React.FC<{}> = ({ children }) => {
  return (
    <div className='f c-fill2'>
      <Helmet>
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
        <link
          href='https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600|Oswald'
          rel='stylesheet'
        />
      </Helmet>
      <header className='px3 py2 bb c-fill1 maple cover c-txt-walnut'>
        <h2 className='f-title medium t8 center bps-left bps-t10 kern1'>
          <a className='kern0' href='/'>
            Sketchup for Woodworkers
          </a>
        </h2>
        <p className='t3 pt1 center bps-left'>
          The internet's FREE leading online resource for learning Sketchup that
          is built and run by woodworkers for woodworkers.
        </p>
      </header>

      <div className='flex'>
        <main className='up1'>{children}</main>
      </div>

      <footer className='flex flex-center maple c-txt-walnut'>
        <p className='p2 center'>
          Sketchup for Woodworkers is &copy;2020
          <a className='underline' href='//zthall.com'>
            Zack Hall
          </a>
        </p>
      </footer>
      <script
        dangerouslySetInnerHTML={{
          __html: `
          var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
          document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
        `,
        }}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
          try {
            var pageTracker = _gat._getTracker("UA-164680-16");
            pageTracker._trackPageview();
          } catch(err) {}
        `,
        }}
      />
    </div>
  )
}

export default Layout
