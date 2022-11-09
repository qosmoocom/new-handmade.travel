import React, {useEffect, useState} from "react";
import styled from 'styled-components'

const Section = styled.div`
  img{
    width : 60px;
    height : 60px;
    margin : 0 auto;
  }

  .tab-item-title{
    color : #fff;
    text-align: center;
    font-size : 18px;
  }

  .tab-item{
    width : 100%;
    padding : 20px 0px;
    :hover{
        transition: width 2s;
        cursor: pointer;
        background-color: #fff;
        .tab-item-title {
            color: #33cccc;
            font-weight : 500;
        }
    }
  }

  .img-box{
    width : 100%;
    display : flex;
    align-items: center;
  }
`
const TabItem = ({item, key}) => {
//   const [home, setHome] = useState(homeRu)
  
  useEffect(() => {
    // axios.get("/api/tour/home").then((res) => {
    //   setTours(res.data);
    // });
  }, []);

  const scrolToId= (id) => {
    // window.scrollTo(0, ref.current.scrollHeight)
    const block = document.getElementById(id)
    // console.log(block)
    window.scrollTo(0, block.scrollTop)
  }
  return (
    <Section>
        <div className="tab-item" key={key} onClick={()=>scrolToId(item.id)}>
            <div className="img-box">
                <img src={item.src}/>
            </div>
            <div className="tab-item-title">{item.title}</div>
        </div>
        
    </Section>
  )
}

export default TabItem;