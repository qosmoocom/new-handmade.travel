import React, {useEffect, useState} from "react";
import styled from 'styled-components'

const Constructor = () => {
    
  // useEffect(() => {
    
  // },);

  const Section = styled.div`
  .full-panel {
    width: 100%;
    height : 100%;
    background-color : rgba(0, 0, 0, 0.5);
    display : none;
    // display : block;
    position: absolute;
    left: 0;
    top: 0;
  }

  .show-panel{
    display : block;
  }

  .panel{
    max-width : 600px;
    max-height : 400px;
    width : 100%;
    height : 100%;

    background-color : #fff;
    border : 1.5px solid #000;
    position : absolute;
    top: 20%;
    left : 35%
    
  }
  .panel-content{
    position:relative;
    padding : 10px;
  }

  .close-btn{
    position : absolute;
    right : 10px;
    top : 0px;
    font-weigth : 700;
    font-size : 20px;
    color : #000;
    background-color : transparent;
    outline: none;
    border : none;
  }

  .text-content{

  }
  `
  
  return (
    <>
    <Section>
        <div className="full-panel" id ='full-panel'>
          <div className="panel">
            <div className="panel-content">
              <button className="close-btn">x</button>            
              <div className="text-content">
                <div>Lorem</div>
              </div>
              <button> Hello</button>    
            </div> 
          </div>
        </div>
    </Section>
    </>
  )
}

export default Constructor;
