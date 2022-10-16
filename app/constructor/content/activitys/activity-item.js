import React, {useEffect, useState} from "react";
import styled from 'styled-components'

const Section = styled.div`
  .activity-item {
    border-radius : 5px;
    margin-bottom: 30px;
    position : relative; 
    cursor : pointer;
    width : 200px;
    height : 150px;
    margin-right : 10px;
  }

  .checked-item{
    // box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    // box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    .activity-title {
      color : #fff;
      background-color : #33cccc;
      // background-color : #F27648;
      font-weight : 500;
    }
  }

  .title-box{
    position : absolute;
    bottom : 0;
    width : 100%;
  }

  .activity-title {
    font-weight: 500;
    font-size : 25px;
    padding: 10px 5px;
    color : #fff;
    background-color : rgba(0, 0, 0, 0.4)
  }

  input{
    position : absolute;
    left : 10px;
    top : 10px;
    font-size : 20px;
  }

`
const ActivityItem = ({item, key}) => {
    
  const [check, setCheck] = useState(false)
  
  useEffect(() => {
    // axios.get("/api/tour/home").then((res) => {
    //   setTours(res.data);
    // });
  }, []);

  const activityChecked = (e) => {
    setCheck(e.target.checked)
  }

  const activityItemOnClick= (e) => {
    let target = e.target
    let checkbox
    if (target.className == 'activity-title' ) {
      checkbox = target.parentNode.parentNode.getElementsByTagName('input')
      setCheck(!check)
    } else {
      checkbox = target.getElementsByTagName('input')
      setCheck(!check)
    }
  }

  const checkedItem = check ? 'checked-item' : ''

  return (
    <Section>
        <div className={`activity-item ${checkedItem}`} key={key} onClick={activityItemOnClick} style={{background: `url(${item.src}) no-repeat`, backgroundSize: 'cover'}} >
            <div className="title-box">
              <div className="activity-title">{item.title}</div>
            </div>
            <input type="checkbox" name={item.title} onChange={activityChecked} checked={check}/>
        </div>
    </Section>
  )
}

export default ActivityItem;