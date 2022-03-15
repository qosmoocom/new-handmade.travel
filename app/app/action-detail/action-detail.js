import { useDispatch, useSelector } from 'react-redux';
import React, { useContext } from 'react';
import Text from '../../components/Text';
import { AppContext } from '..';
import SectionActive from '../../components/SectionActive';
function ActionDetail() {
  const { getItem } = useContext(AppContext);

  const dispatch = useDispatch();

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
    (i) => i.name === 'action-detail'
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
      <div id="action-detail" style={bgYellow}>
        <div className="container">
          <div className="content">
            <div className="content-left">
              <h3 className="action_detail_title">
                <Text
                  name="action_detail_title"
                  itIsClassName="action_detail_title"
                >
                  {getItem('action_detail_title')}
                </Text>
              </h3>
              <p className="action_detail_info">
                <Text
                  name="action_detail_info"
                  itIsClassName="action_detail_info"
                >
                  {getItem('action_detail_info')}
                </Text>
              </p>
            </div>
            <div className="content-right">
              <button className="action_detail_btn" onClick={handleOnModal}>
                <Text
                  name="action_detail_btn"
                  itIsClassName="action_detail_btn"
                >
                  {getItem('action_detail_btn')}
                </Text>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ActionDetail;
