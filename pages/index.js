import Head from 'next/head'

export default function Home() {
  fetch('/api/hello')
    .then((res) => res.json())
    .then((val) => console.log(val))

  return (
    <>
      <p className='pt3 px3 t4 center mw-copy mxauto'>
        Join thousands of woodworkers who have finally gotten over the hump of
        learning Sketchup to design and layout their next woodworking project!
      </p>
      <div className='flex pl3 pt3'>
        <div className='up1 bps-up2 bpm-up3 pr3'>
          <ul>
            <li className='p2 mb3 c-fill1 shadow1'>
              <figure className='center'>
                <a href='/tutorials/getting-started-part-1.html'>
                  <img src='/images/1-thumb.jpg' />
                </a>
                <figcaption className='mt1'>
                  <a href='/tutorials/getting-started-part-1.html'>
                    Getting Started, Part 1
                  </a>
                </figcaption>
              </figure>
            </li>
            <li className='p2 mb3 c-fill1 shadow1'>
              <figure className='center'>
                <a href='/tutorials/curves-moulding-outliner.html'>
                  <img src='/images/4-thumb.jpg' />
                </a>
                <figcaption className='mt1'>
                  <a href='/tutorials/curves-moulding-outliner.html'>
                    Curves, Moulding and the Outliner
                  </a>
                </figcaption>
              </figure>
            </li>
            <li className='p2 mb3 c-fill1 shadow1'>
              <figure className='center'>
                <a href='/tutorials/dimensions-printing.html'>
                  <img src='/images/7-thumb.jpg' />
                </a>
                <figcaption className='mt1'>
                  <a href='/tutorials/dimensions-printing.html'>
                    Dimensions and Printing
                  </a>
                </figcaption>
              </figure>
            </li>
          </ul>
        </div>
        <div className='up1 bps-up2 bpm-up3 pr3'>
          <ul>
            <li className='p2 mb3 c-fill1 shadow1'>
              <figure className='center'>
                <a href='/tutorials/getting-started-part-2.html'>
                  <img src='/images/2-thumb.jpg' />
                </a>
                <figcaption className='mt1'>
                  <a href='/tutorials/getting-started-part-2.html'>
                    Getting Started, Part 2
                  </a>
                </figcaption>
              </figure>
            </li>
            <li className='p2 mb3 c-fill1 shadow1'>
              <figure className='center'>
                <a href='/tutorials/moulding-revisited.html'>
                  <img src='/images/5-thumb.jpg' />
                </a>
                <figcaption className='mt1'>
                  <a href='/tutorials/moulding-revisited.html'>
                    Moulding Revisited
                  </a>
                </figcaption>
              </figure>
            </li>
          </ul>
        </div>
        <div className='up1 bps-up2 bpm-up3 pr3'>
          <ul>
            <li className='p2 mb3 c-fill1 shadow1'>
              <figure className='center'>
                <a href='/tutorials/dados-rabbets-grooves.html'>
                  <img src='/images/3-thumb.jpg' />
                </a>
                <figcaption className='mt1'>
                  <a href='/tutorials/dados-rabbets-grooves.html'>
                    Dados, Rabbets and Grooves
                  </a>
                </figcaption>
              </figure>
            </li>
            <li className='p2 mb3 c-fill1 shadow1'>
              <figure className='center'>
                <a href='/tutorials/joints.html'>
                  <img src='/images/6-thumb.jpg' />
                </a>
                <figcaption className='mt1'>
                  <a href='/tutorials/joints.html'>Joints, Joints, Joints</a>
                </figcaption>
              </figure>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
