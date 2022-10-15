import React, {useEffect, useState} from "react";
import styled from 'styled-components'

const Section = styled.div`
  .activity-item {
    border-radius : 5px;
    margin-bottom: 30px;
    position : relative; 
    cursor : pointer;
    width : 300px;
    height : 200px;
    @media (min-width:1400px) {
      width : 26vw;
      height : 300px;
    }
    margin-right : 10px;
  }

  .checked-item{
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    .city-title {
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
    if (target.className == 'city-title' ) {
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
        <div className={`activity-item ${checkedItem}`} key={key} onClick={cityItemOnClick} style={{background: `url(${item.src}) no-repeat`, backgroundSize: 'cover'}} >
            <div className="title-box">
              <div className="activity-title">{item.title}</div>
            </div>
            <input type="checkbox" name={item.title} onChange={cityChecked} checked={check}/>
        </div>
    </Section>
  )
}

export default ActivityItem;