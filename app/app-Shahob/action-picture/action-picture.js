import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SectionActive from '../../components/SectionActive';
import Image from '../../components/Image';
import Text from '../../components/Text';
import { AppContext } from '..';
export default function ActionPicture() {
  const { getItem } = useContext(AppContext);
  // modal 2 opened
  const dispatch = useDispatch();
  const handleOnModal2 = () => {
    const payload = {
      currentModal: 'MODAL_3',
      actionModal: 'ACTION 2',
    };
    dispatch({ type: 'MODAL_OPEN', payload });
  };
  // component active no active
  const val = useSelector((state) => state.admin.app_sections_active).find(
    (i) => i.name === 'action-picture'
  );

  const { isEdit: thisIsNotClient } = useSelector((st) => st.admin);

  const bronBtnActive = useSelector(
    (state) => state.admin.app_sections_active
  ).find((i) => i.name === 'rate').isActive;

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
      <div id="action-picture" style={bgYellow}>
        <div className="container">
          <div className="action-picture-btn">
            {bronBtnActive && (
              <button style={{ cursor: "pointer" }} onClick={handleOnModal2}>
                <Text name="action_picture_btn_bron">
                  {getItem("action_picture_btn_bron")}
                </Text>
              </button>
            )}
          </div>
        </div>
        <div className="wrapper-content">
          <div className="container">
            <div className="content-left">
              <div className="content">
                <h3 className="content-left-title">
                  <Text name="action_picture_head">
                    {getItem("action_picture_head")}
                  </Text>
                </h3>
                <p className="content-left-descript">
                  <Text name="action_picture_text">
                    {getItem("action_picture_text")}
                  </Text>
                </p>
              </div>
            </div>
            <div className="content-right">
              <div className="img-box">
                <Image
                  src={getItem("action_picture_imgSrc")}
                  title={getItem("action_picture_imgTitle")}
                  alt={getItem("action_picture_imgAlt")}
                  srcDataName={"action_picture_imgSrc"}
                  titleDataName={"action_picture_imgTitle"}
                  altDataName={"action_picture_imgAlt"}
                  layout="fill"
                  objectFit="cover"
                  itIsClassName="img-box"
                  sectionName={val.name}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
