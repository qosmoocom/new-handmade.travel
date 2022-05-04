import React, { useContext } from 'react';
import { AppContext } from '..';
import { useSelector } from 'react-redux';
import SectionActive from '../../components/SectionActive';
import Text from '../../components/Text';
import Image from '../../components/Image';
import Item from '../../components/Item';
export default function FirstUtp() {
  const { getItem } = useContext(AppContext);

  // component active no active
  const val = useSelector((state) => state.admin.app_sections_active).find(
    (i) => i.name === 'first-utp'
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
      <div id="first-utp" style={bgYellow}>
        <div className="container">
          <div className="row">
            {getItem('first_utp_item', 'first_utp').map((item, index) => {
              return (
                <Item
                  key={index}
                  className="first-utp-item col-12 col-sm-12 col-md-6"
                  group="first_utp"
                  itemId={index}
                >
                  <div className="first-utp-img">
                    <div className="first-utp-img-box">
                      <Image
                        src={item.img.src}
                        priority
                        itIsClassName="first-utp-img-box"
                        objectFit="contain"
                        layout="fill"
                        alt={item.img.alt}
                        title={item.img.title}
                        group={"first_utp"}
                        id={index}
                        sectionName={val.name}
                      />
                    </div>
                  </div>
                  <div className="first-utp-text">
                    <h2>
                      <Text
                        group="first_utp"
                        name="text1"
                        itIsClassName="first-utp-text"
                        id={index}
                      >
                        {item.text1}
                      </Text>
                    </h2>
                  </div>
                </Item>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
