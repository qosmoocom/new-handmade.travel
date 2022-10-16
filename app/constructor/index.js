import React, {useEffect, useState} from "react";
import axios from "axios";
import styled from 'styled-components'
import Tabs from './tabs'
import Header from './header'
import Content from './content'

const Section = styled.div`
  .content{
    display : flex;
    width : 100vw;
    height : 100vh;
  }

  .left{
    width : 130px;
    height : 100%;
    background-color : #33cccc;
    // background-color : #f8f8f8;
    // background-color : #F27648;
    border-right: 1px solid #fff;
    position : fixed;
    margin-top : 100px;
  }

  .right {
    width : 80%;
    height : 100%;
    background-color : #f8f8f8;
    padding-left: 130px;
    margin-top : 100px;
  }
`
const Constructor = () => {
//   const [home, setHome] = useState(homeRu)
  
  useEffect(() => {
    // axios.get("/api/tour/home").then((res) => {
    //   setTours(res.data);
    // });
  }, []);

  const tabs = [
    {title: 'Главная', id : 'index', src : '/images/constructor/ico/compass.png'},
    {title: 'Города', id : 'city', src : '/images/constructor/ico/location.png'},
    {title: 'Активность', id : 'index', src : '/images/constructor/ico/camera.png'},
    {title: 'Гостиницы', id : 'city', src : '/images/constructor/ico/hotel2.png'},
    {title: 'Питание', id : 'city', src : '/images/constructor/ico/plate.png'},
    {title: 'Программа', id : 'city', src : '/images/constructor/ico/mountain.png'},
  ]

  const cities = [
    {title: 'Ташкент', id : 'tashkent', src : '/images/constructor/city/city1.jpg'},
    {title: 'Самарканд', id : 'samarkand', src : '/images/constructor/city/city2.jpg'},
    {title: 'Бухара', id : 'bukhara', src : '/images/constructor/city/city3.jpg'},
    {title: 'Хива', id : 'samarkand', src : '/images/constructor/city/city4.jpg'},
    {title: 'Нукус', id : 'bukhara', src : '/images/constructor/city/city5.jpg'},
    {title: 'Нурата', id : 'tashkent', src : '/images/constructor/city/city6.jpg'},
  ]
  
  const activitys = [
    { city : 'tashkent',
      src : '/images/constructor/city/city1.jpg',
      data : [
        {title: 'Хазрати Хизр', id : 'tashkent', src : '/images/constructor/activity/act1.jpg'},
        {title: 'Хазрати Хизр', id : 'tashkent', src : '/images/constructor/activity/act2.jpg'},
        {title: 'Хазрати Хизр', id : 'tashkent', src : '/images/constructor/activity/act3.jpg'},
        {title: 'Хазрати Хизр', id : 'tashkent', src : '/images/constructor/activity/act4.jpg'},
        {title: 'Хазрати Хизр', id : 'tashkent', src : '/images/constructor/activity/act5.jpg'},
        {title: 'Хазрати Хизр', id : 'tashkent', src : '/images/constructor/activity/act6.jpg'},
        {title: 'Хазрати Хизр', id : 'tashkent', src : '/images/constructor/activity/act7.jpg'},
        {title: 'Хазрати Хизр', id : 'tashkent', src : '/images/constructor/activity/act8.jpg'},
        {title: 'Хазрати Хизр', id : 'tashkent', src : '/images/constructor/activity/act6.jpg'},
        {title: 'Хазрати Хизр', id : 'tashkent', src : '/images/constructor/activity/act7.jpg'},
      ]
    },
    { city : 'samarkand',
      src : '/images/constructor/city/city2.jpg',
      data : [
        {title: 'Регистан', id : 'samarkand', src : '/images/constructor/activity/act6.jpg'},
        {title: 'Регистан', id : 'samarkand', src : '/images/constructor/activity/act7.jpg'},
        {title: 'Регистан', id : 'samarkand', src : '/images/constructor/activity/act8.jpg'},
        {title: 'Регистан', id : 'samarkand', src : '/images/constructor/activity/act1.jpg'},
        {title: 'Регистан', id : 'samarkand', src : '/images/constructor/activity/act2.jpg'},
        {title: 'Регистан', id : 'samarkand', src : '/images/constructor/activity/act3.jpg'},
        {title: 'Регистан', id : 'samarkand', src : '/images/constructor/activity/act4.jpg'},
        {title: 'Регистан', id : 'samarkand', src : '/images/constructor/activity/act5.jpg'},
        {title: 'Регистан', id : 'samarkand', src : '/images/constructor/activity/act2.jpg'},
        {title: 'Регистан', id : 'samarkand', src : '/images/constructor/activity/act3.jpg'},
      ]
    },
    { city : 'bukhara',
      src : '/images/constructor/city/city3.jpg',
      data : [
        {title: 'Ляби Хауз', id : 'bukhara', src : '/images/constructor/activity/act3.jpg'},
        {title: 'Ляби Хауз', id : 'bukhara', src : '/images/constructor/activity/act4.jpg'},
        {title: 'Ляби Хауз', id : 'bukhara', src : '/images/constructor/activity/act5.jpg'},
        {title: 'Ляби Хауз', id : 'bukhara', src : '/images/constructor/activity/act1.jpg'},
        {title: 'Ляби Хауз', id : 'bukhara', src : '/images/constructor/activity/act2.jpg'},
        {title: 'Ляби Хауз', id : 'bukhara', src : '/images/constructor/activity/act6.jpg'},
        {title: 'Ляби Хауз', id : 'bukhara', src : '/images/constructor/activity/act7.jpg'},
        {title: 'Ляби Хауз', id : 'bukhara', src : '/images/constructor/activity/act8.jpg'},
        {title: 'Ляби Хауз', id : 'bukhara', src : '/images/constructor/activity/act2.jpg'},
        {title: 'Ляби Хауз', id : 'bukhara', src : '/images/constructor/activity/act6.jpg'},
      ]
    },
    { city : 'khiva',
      src : '/images/constructor/city/city4.jpg',
      data : [
        {title: 'Ичан кала', id : 'khiva', src : '/images/constructor/activity/act4.jpg'},
        {title: 'Ичан кала', id : 'khiva', src : '/images/constructor/activity/act5.jpg'},
        {title: 'Ичан кала', id : 'khiva', src : '/images/constructor/activity/act6.jpg'},
        {title: 'Ичан кала', id : 'khiva', src : '/images/constructor/activity/act1.jpg'},
        {title: 'Ичан кала', id : 'khiva', src : '/images/constructor/activity/act2.jpg'},
        {title: 'Ичан кала', id : 'khiva', src : '/images/constructor/activity/act3.jpg'},
        {title: 'Ичан кала', id : 'khiva', src : '/images/constructor/activity/act7.jpg'},
        {title: 'Ичан кала', id : 'khiva', src : '/images/constructor/activity/act8.jpg'},
        {title: 'Ичан кала', id : 'khiva', src : '/images/constructor/activity/act2.jpg'},
        {title: 'Ичан кала', id : 'khiva', src : '/images/constructor/activity/act3.jpg'},
      ]
    },
    { city : 'navai',
      src : '/images/constructor/city/city5.jpg',
      data : [
        {title: 'Алишер Наваи боги', id : 'navai', src : '/images/constructor/activity/act3.jpg'},
        {title: 'Алишер Наваи боги', id : 'navai', src : '/images/constructor/activity/act4.jpg'},
        {title: 'Алишер Наваи боги', id : 'navai', src : '/images/constructor/activity/act5.jpg'},
        {title: 'Алишер Наваи боги', id : 'navai', src : '/images/constructor/activity/act1.jpg'},
        {title: 'Алишер Наваи боги', id : 'navai', src : '/images/constructor/activity/act2.jpg'},
        {title: 'Алишер Наваи боги', id : 'navai', src : '/images/constructor/activity/act6.jpg'},
        {title: 'Алишер Наваи боги', id : 'navai', src : '/images/constructor/activity/act7.jpg'},
        {title: 'Алишер Наваи боги', id : 'navai', src : '/images/constructor/activity/act8.jpg'},
        {title: 'Алишер Наваи боги', id : 'navai', src : '/images/constructor/activity/act5.jpg'},
        {title: 'Алишер Наваи боги', id : 'navai', src : '/images/constructor/activity/act1.jpg'},
      ]
    },
    { city : 'nurata',
      src : '/images/constructor/city/city6.jpg',
      data : [
        {title: 'Нурата масжид', id : 'nurata', src : '/images/constructor/activity/act3.jpg'},
        {title: 'Нурата масжид', id : 'nurata', src : '/images/constructor/activity/act4.jpg'},
        {title: 'Нурата масжид', id : 'nurata', src : '/images/constructor/activity/act1.jpg'},
        {title: 'Нурата масжид', id : 'nurata', src : '/images/constructor/activity/act2.jpg'},
        {title: 'Нурата масжид', id : 'nurata', src : '/images/constructor/activity/act5.jpg'},
        {title: 'Нурата масжид', id : 'nurata', src : '/images/constructor/activity/act6.jpg'},
        {title: 'Нурата масжид', id : 'nurata', src : '/images/constructor/activity/act7.jpg'},
        {title: 'Нурата масжид', id : 'nurata', src : '/images/constructor/activity/act4.jpg'},
        {title: 'Нурата масжид', id : 'nurata', src : '/images/constructor/activity/act1.jpg'},
        {title: 'Нурата масжид', id : 'nurata', src : '/images/constructor/activity/act6.jpg'},
      ]
    }
  ]
  return (
    <Section>
        <div className="constructor">
            <Header/>
            <div className="content">
                <div className="left">
                  <Tabs data={tabs}/>
                </div>
                <div className="right">
                  <Content cities={cities} activitys={activitys}/>
                </div>
            </div>
        </div>
    </Section>
  )
}

export default Constructor;