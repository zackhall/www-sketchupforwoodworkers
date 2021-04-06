import Link from 'next/link'

export default function Home() {
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
                <Link href='/tutorials/getting-started-part-1'>
                  <a>
                    <img src='/images/1-thumb.jpg' />
                  </a>
                </Link>
                <figcaption className='mt1'>
                  <Link href='/tutorials/getting-started-part-1'>
                    <a>Getting Started, Part 1</a>
                  </Link>
                </figcaption>
              </figure>
            </li>
            <li className='p2 mb3 c-fill1 shadow1'>
              <figure className='center'>
                <Link href='/tutorials/curves-moulding-outliner'>
                  <a>
                    <img src='/images/4-thumb.jpg' />
                  </a>
                </Link>
                <figcaption className='mt1'>
                  <Link href='/tutorials/curves-moulding-outliner'>
                    <a>Curves, Moulding and the Outliner</a>
                  </Link>
                </figcaption>
              </figure>
            </li>
            <li className='p2 mb3 c-fill1 shadow1'>
              <figure className='center'>
                <Link href='/tutorials/dimensions-printing'>
                  <a>
                    <img src='/images/7-thumb.jpg' />
                  </a>
                </Link>
                <figcaption className='mt1'>
                  <Link href='/tutorials/dimensions-printing'>
                    <a>Dimensions and Printing</a>
                  </Link>
                </figcaption>
              </figure>
            </li>
          </ul>
        </div>
        <div className='up1 bps-up2 bpm-up3 pr3'>
          <ul>
            <li className='p2 mb3 c-fill1 shadow1'>
              <figure className='center'>
                <Link href='/tutorials/getting-started-part-2'>
                  <a>
                    <img src='/images/2-thumb.jpg' />
                  </a>
                </Link>
                <figcaption className='mt1'>
                  <Link href='/tutorials/getting-started-part-2'>
                    <a>Getting Started, Part 2</a>
                  </Link>
                </figcaption>
              </figure>
            </li>
            <li className='p2 mb3 c-fill1 shadow1'>
              <figure className='center'>
                <Link href='/tutorials/moulding-revisited'>
                  <a>
                    <img src='/images/5-thumb.jpg' />
                  </a>
                </Link>
                <figcaption className='mt1'>
                  <Link href='/tutorials/moulding-revisited'>
                    <a>Moulding Revisited</a>
                  </Link>
                </figcaption>
              </figure>
            </li>
          </ul>
        </div>
        <div className='up1 bps-up2 bpm-up3 pr3'>
          <ul>
            <li className='p2 mb3 c-fill1 shadow1'>
              <figure className='center'>
                <Link href='/tutorials/dados-rabbets-grooves'>
                  <a>
                    <img src='/images/3-thumb.jpg' />
                  </a>
                </Link>
                <figcaption className='mt1'>
                  <Link href='/tutorials/dados-rabbets-grooves'>
                    <a>Dados, Rabbets and Grooves</a>
                  </Link>
                </figcaption>
              </figure>
            </li>
            <li className='p2 mb3 c-fill1 shadow1'>
              <figure className='center'>
                <Link href='/tutorials/joints'>
                  <a>
                    <img src='/images/6-thumb.jpg' />
                  </a>
                </Link>
                <figcaption className='mt1'>
                  <Link href='/tutorials/joints'>
                    <a>Joints, Joints, Joints</a>
                  </Link>
                </figcaption>
              </figure>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
