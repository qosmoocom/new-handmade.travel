import SectionActive from '../../components/SectionActive';
import { useSelector } from 'react-redux';
import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '..';
import Image from '../../components/Image';
import Text from '../../components/Text';
export default function Gallery() {
  const { getItem } = useContext(AppContext);
  const imgs = getItem('gallery', 'gallery');
  const [g2, setG2] = useState(false);
  const [g3, setG3] = useState(false);
  const [scW, setScW] = useState(0);
  const [slider, setSlider] = useState({ open: false, img_url: '' });

  useEffect(() => {
    setScW(window.outerWidth);
    const imgs = [...document.querySelectorAll('.imgs-wrapper img')].map(
      (img) => {
        return {
          width: img.width,
          height: img.height,
        };
      }
    );

    (() => {
      window.addEventListener('resize', () => {
        setScW(window.outerWidth);
      });
    })();
  }, []);

  // component active no active
  const val = useSelector((state) => state.admin.app_sections_active).find(
    (i) => i.name === 'gallery'
  );

  const { isEdit: thisIsNotClient } = useSelector((st) => st.admin);

  const bgYellow = {
    background: val.isActive ? null : 'yellow',
    opacity: val.isActive ? null : '0.2',
    cursor: val.isActive ? null : 'not-allowed',
    zIndex: val.isActive ? null : 20000,
  };

  if (!thisIsNotClient && !val.isActive) return null;
  // component active no active

  return (
    <>
      <SectionActive name={val.name} />
      <div id="gallery-wrapper" style={bgYellow} className="imgs-wrapper">
        <div className="container">
          <div className="urta">
            <div className="content-1">
              <h3>
                <Text name="gallery_title" itIsClassName="gallery_title h3">
                  {getItem('gallery_title')}
                </Text>
              </h3>
              <div className="box-img">
                <div className="section-1">
                  <div
                    className="img img-1 s-img"
                    style={{ overflow: 'hidden' }}
                  >
                    <Image
                      layout="fill"
                      src={imgs[0].img.src}
                      alt={imgs[0].img.alt}
                      title={imgs[0].img.title}
                      group="gallery"
                      id="0"
                      itIsClassName="img img-1 s-img"
                    />
                  </div>
                  <div
                    className="img img-4 s-img"
                    style={{ overflow: 'hidden' }}
                  >
                    <Image
                      layout="fill"
                      src={imgs[3].img.src}
                      alt={imgs[3].img.alt}
                      title={imgs[3].img.title}
                      group="gallery"
                      id="3"
                      itIsClassName="img img-4 s-img"
                    />
                  </div>
                </div>
                <div className="box">
                  <div className="section-2">
                    <div
                      className="img img-2 s-img"
                      style={{ overflow: 'hidden' }}
                    >
                      <Image
                        layout="fill"
                        src={imgs[1].img.src}
                        alt={imgs[1].img.alt}
                        title={imgs[1].img.title}
                        group="gallery"
                        id="1"
                        itIsClassName="img img-2 s-img"
                      />
                    </div>
                    <div
                      className="img img-3 s-img"
                      style={{ overflow: 'hidden' }}
                    >
                      <Image
                        layout="fill"
                        src={imgs[2].img.src}
                        alt={imgs[2].img.alt}
                        title={imgs[2].img.title}
                        group="gallery"
                        id="2"
                        itIsClassName="img img-3 s-img"
                      />
                    </div>
                  </div>
                  <div
                    className="img img-5 s-img"
                    style={{ overflow: 'hidden' }}
                  >
                    <Image
                      layout="fill"
                      src={imgs[4].img.src}
                      alt={imgs[4].img.alt}
                      title={imgs[4].img.title}
                      group="gallery"
                      id="4"
                      itIsClassName="img img-5 s-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <button
              className={`yashirish ${g2 && 'display-none'}`}
              onClick={() => setG2(true)}
            >
              <Text name="gallery_more_btn">{getItem('gallery_more_btn')}</Text>
            </button>
          </div>
          {g2 && (
            <div className="content-2">
              <article style={{ position: 'relative' }} className="s-img">
                <Image
                  layout="fill"
                  src={imgs[5].img.src}
                  alt={imgs[5].img.alt}
                  title={imgs[5].img.title}
                  group="gallery"
                  id="5"
                  itIsClassName="s-img"
                />
              </article>
              <article style={{ position: 'relative' }} className="s-img">
                <Image
                  layout="fill"
                  src={imgs[6].img.src}
                  alt={imgs[6].img.alt}
                  title={imgs[6].img.title}
                  group="gallery"
                  id="6"
                  itIsClassName="s-img"
                />
              </article>
              <article style={{ position: 'relative' }} className="s-img">
                <Image
                  layout="fill"
                  src={imgs[7].img.src}
                  alt={imgs[7].img.alt}
                  title={imgs[7].img.title}
                  group="gallery"
                  id="7"
                  itIsClassName="s-img"
                />
              </article>
              <article style={{ position: 'relative' }} className="s-img">
                <Image
                  layout="fill"
                  src={imgs[8].img.src}
                  alt={imgs[8].img.alt}
                  title={imgs[8].img.title}
                  group="gallery"
                  id="8"
                  itIsClassName="s-img"
                />
              </article>
              <article style={{ position: 'relative' }} className="s-img">
                <Image
                  layout="fill"
                  src={imgs[9].img.src}
                  alt={imgs[9].img.alt}
                  title={imgs[9].img.title}
                  group="gallery"
                  id="9"
                  itIsClassName="s-img"
                />
              </article>
            </div>
          )}
        </div>

        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          {g2 && (
            <div style={{ textAlign: 'center' }}>
              <button
                className={`yashirish ${g3 && 'display-none'}`}
                onClick={() => setG3(true)}
              >
                {getItem('gallery_more_btn')}
              </button>
            </div>
          )}
          {g3 && (
            <div className="content-2" style={{ marginTop: '3px' }}>
              <article style={{ position: 'relative' }} className="s-img">
                <Image
                  layout="fill"
                  src={imgs[10].img.src}
                  alt={imgs[10].img.alt}
                  title={imgs[10].img.title}
                  group="gallery"
                  id="10"
                  itIsClassName="s-img"
                />
              </article>
              <article style={{ position: 'relative' }} className="s-img">
                <Image
                  layout="fill"
                  src={imgs[11].img.src}
                  alt={imgs[11].img.alt}
                  title={imgs[11].img.title}
                  group="gallery"
                  id="11"
                  itIsClassName="s-img"
                />
              </article>
              <article style={{ position: 'relative' }} className="s-img">
                <Image
                  layout="fill"
                  src={imgs[12].img.src}
                  alt={imgs[12].img.alt}
                  title={imgs[12].img.title}
                  group="gallery"
                  id="12"
                  itIsClassName="s-img"
                />
              </article>
              <article style={{ position: 'relative' }} className="s-img">
                <Image
                  layout="fill"
                  src={imgs[13].img.src}
                  alt={imgs[13].img.alt}
                  title={imgs[13].img.title}
                  group="gallery"
                  id="13"
                  itIsClassName="s-img"
                />
              </article>
              <article style={{ position: 'relative' }} className="s-img">
                <Image
                  layout="fill"
                  src={imgs[14].img.src}
                  alt={imgs[14].img.alt}
                  title={imgs[14].img.title}
                  group="gallery"
                  id="14"
                  itIsClassName="s-img"
                />
              </article>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
