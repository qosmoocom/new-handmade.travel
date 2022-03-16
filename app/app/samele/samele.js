import { useSelector } from 'react-redux';
import SectionActive from '../../components/SectionActive';
import React, { useContext } from 'react';

import { AppContext } from '..';
import Image from '../../components/Image';
import Text from '../../components/Text';
import Item from '../../components/Item';
export default function Samele() {
  const { getItem } = useContext(AppContext);

  // modal opened
  const handleOnModal = () => {
    const payload = {
      currentModal: 'MODAL_2',
      actionModal: 'ACTION_3',
    };
    dispatch({ type: 'MODAL_OPEN', payload });
  };

  // component active no active
  const val = useSelector((state) => state.admin.app_sections_active).find(
    (i) => i.name === 'samele'
  );

  const { isEdit: thisIsNotClient } = useSelector((st) => st.admin);

  const bgYellow = {
    background: val.isActive ? null : 'yellow',
    opacity: val.isActive ? null : '0.2',
    cursor: val.isActive ? null : 'not-allowed',
  };

  if (!thisIsNotClient && !val.isActive) return null;
  // component active no active

  return (
    <>
      <SectionActive name={val.name} />
      <div id="samele" style={bgYellow}>
        <div className="container">
          <div className="content">
            <div className="smale-head-text">
              <h1>
                <Text name="samele_head" itIsClassName="smale-head-text">
                  {getItem('samele_head')}
                </Text>
              </h1>
            </div>
            <div className="blog">
              <div className="image-blog">
                <div className="image-box">
                  <Image
                    layout="fill"
                    objectFit="cover"
                    src={getItem('samele_img_url')}
                    alt={getItem('samele_img_alt')}
                    title={getItem('samele_img_title')}
                    srcDataName={'samele_img_url'}
                    altDataName={'samele_img_alt'}
                    titleDataName={'samele_img_title'}
                    itIsClassName="image-blog"
                  />
                </div>
              </div>
              <div className="text-box">
                <h1>
                  <Text name="samele_name" itIsClassName="text-box">
                    {getItem('samele_name')}
                  </Text>
                </h1>
                <p>
                  <Text name="samele_title" itIsClassName="text-box">
                    {getItem('samele_title')}
                  </Text>
                </p>
                <p>
                  <Text name="samele_title_1" itIsClassName="text-box">
                    {getItem('samele_title_1')}
                  </Text>
                </p>
                <ul>
                  {getItem('sameleData', 'sameleData').map((item, index) => {
                    return (
                      <Item
                        className="li"
                        group="sameleData"
                        itemId={index}
                        key={index}
                      >
                        <Text
                          name="title"
                          itIsClassName="text-box ul li"
                          group="sameleData"
                          id={index}
                        >
                          {item.title}
                        </Text>
                      </Item>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
