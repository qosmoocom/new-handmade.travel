import React, {useEffect, useState} from "react";
import styled from 'styled-components'
import Link from "../../components/Link";

const Section = styled.div`
 .header{
    height : 80px;
    width : 100%;
    background-color : #f1f1f1;
    box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.6);
    padding: 10px 20px;
    position : fixed;
    z-index : 100;
    display : flex;
    align-items : center;
  }

  .logo{
    text-decoration: none;
    img{
      width: 36px;
      height: 30px;
      margin-right: 10px;
      @media (min-width:768px) {
       width: 42px;
       height: 35px;
      }
    }
  }

  .logo-text{
    font-family: 'Oswald';
    font-weight: 600;
    font-size: 18px;
    line-height: 20px;
    // color: #F27648;
    color : #33cccc;
    // width: 80px;
    font-size: 25px;
    @media (min-width:1400px) {
      line-height: 30px;
    }
  }
`
const Header = () => {
//   const [home, setHome] = useState(homeRu)
  
  useEffect(() => {
    // axios.get("/api/tour/home").then((res) => {
    //   setTours(res.data);
    // });
  }, []);

  
  return (
    <Section>
        <div className="header">
          <Link className="logo" href={'/'}>
            {/* <img src='/images/home/header/logo.png' alt='Logo'/> */}
            <div className="logo-text">handmade.travel</div>
          </Link>
        </div>     
    </Section>
  )
}

export default Header;