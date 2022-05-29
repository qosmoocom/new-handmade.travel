import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppContext } from '..';
import SectionActive from '../../components/SectionActive';
import Image from '../../components/Image';
import Text from '../../components/Text';
export default function Author() {
  const { getItem } = useContext(AppContext);
  const dispatch = useDispatch();

  // modal opened
  const handleOnModal = () => {
    const payload = {
      currentModal: 'MODAL_1',
      actionModal: 'ACTION 5',
    };
    dispatch({ type: 'MODAL_OPEN', payload });
  };

  // component active no active
  const val = useSelector((state) => state.admin.app_sections_active).find(
    (i) => i.name === 'author'
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
      <div id="author-wrapper" style={bgYellow}>
        <div className="container">
          <div className="container">
            <div className="author-content">
              <div className="author-title">
                <h1>
                  <Text name="author_title" itIsClassName="author-title">
                    {getItem("author_title")}
                  </Text>
                </h1>
              </div>
              <div className="author-descript">
                <div className="author-image">
                  <div className="image-content">
                    <Image
                      layout="fill"
                      objectFit="cover"
                      src={getItem("author_user_imgUrl")}
                      alt={getItem("author_user_imgAlt")}
                      title={getItem("author_user_imgTitle")}
                      srcDataName={"author_user_imgUrl"}
                      altDataName={"author_user_imgAlt"}
                      titleDataName={"author_user_imgTitle"}
                      sectionName={val.name}
                    />
                  </div>
                </div>
                <div className="author-text">
                  <p>
                    <Text name="author_info">{getItem("author_info")}</Text>
                  </p>
                  <button onClick={handleOnModal} style={{ cursor: "pointer" }}>
                    <Text name="author_btn">{getItem("author_btn")}</Text>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
