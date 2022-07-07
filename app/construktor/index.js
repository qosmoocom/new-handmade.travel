import { useEffect, useState } from "react"



export default function Index(){
    const CityList = [
        {
            name:"Toshkent",
            index:0,
        },
        {
            name:"Nukus",
            index:1,
        },
       {
            name:"Xiva",
            index:2,
        },
        {
            name:"Urganch",
            index:3
        },
        {
            name:"Buxoro",
            index:4
        },
        {
            name:"Navoi",
            index:5
        },
        {
            name:'Samarqand',
            index:6
        },
        {
            name:"Jizzax",
            index:7
        }
    ]
    let object = []
    const cityHandler  = (e)=>{
        console.log(e.target.value);
        const {name, value} = e.target
        CityList.map((city, index)=>{
            // console.log(city.name);
            if(city.name==value){
                object.push(city)
            }
        })
        object.sort(function(a, b){
            console.log(a, b);
            return a.index-b.index
        })
        console.log(object);
        // SetCitys([...citys, {[name]:value}  ])
    }
    useEffect(()=>{
        // console.log(citys);
        
        
        
    })
    return(
        <div>
            <form>
                <label>
                    <p>City1</p>
                    <select name="sity1" onChange={(e)=>cityHandler(e)}>
                        <option value="Samarqand">Samarqand</option>
                        <option value="Toshkent">Toshkent</option>
                        <option value="Buxoro">Buxoro</option>
                        <option value="Xiva">Xiva</option>
                        <option value="Nukus">Nukus</option>
                        <option value="Urganch">Urganch</option>
                        <option value="Navoi">navoi</option>
                        <option value="Jizzax">jizzax</option>
                        <option value="guliston">guliston</option>
                        <option value="Andijon">Andijon</option>
                    </select>
                </label>
                <label>
                    <p>City2</p>
                    <select name="sity2" onChange={(e)=>cityHandler(e)}>
                        <option value="Samarqand">Samarqand</option>
                        <option value="Toshkent">Toshkent</option>
                        <option value="Buxoro">Buxoro</option>
                        <option value="Xiva">Xiva</option>
                        <option value="Urganch">Urganch</option>
                        <option value="Nukus">Nukus</option>
                        <option value="Navoi">navoi</option>
                        <option value="Jizzax">jizzax</option>
                    </select>
                </label>
                <label>
                    <p>City3</p>
                    <select name="sity3" onChange={(e)=>cityHandler(e)}>
                        <option value="Samarqand">Samarqand</option>
                        <option value="Toshkent">Toshkent</option>
                        <option value="Buxoro">Buxoro</option>
                        <option value="Xiva">Xiva</option>
                        <option value="Nukus">Nukus</option>
                        <option value="Urganch">Urganch</option>
                        <option value="Navoi">navoi</option>
                        <option value="Jizzax">jizzax</option>
                    </select>
                </label>
                <label>
                    <p>City4</p>
                    <select name="sity4" onChange={(e)=>cityHandler(e)}>
                        <option value="Samarqand">Samarqand</option>
                        <option value="Toshkent">Toshkent</option>
                        <option value="Buxoro">Buxoro</option>
                        <option value="Xiva">Xiva</option>
                        <option value="Nukus">Nukus</option>
                        <option value="navoi">navoi</option>
                        <option value="Jizzax">jizzax</option><option value="Urganch">Urganch</option>
                    </select>
                </label>
                <label>
                    <p>City5</p>
                    <select name="sity5" onChange={(e)=>cityHandler(e)}>
                        <option value="Samarqand">Samarqand</option>
                        <option value="Toshkent">Toshkent</option>
                        <option value="Buxoro">Buxoro</option>
                        <option value="Xiva">Xiva</option>
                        <option value="Nukus">Nukus</option>
                        <option value="navoi">navoi</option>
                        <option value="Jizzax">jizzax</option>
                        <option value="Urganch">Urganch</option>
                    </select>
                </label>
            </form>
        </div>
    )
}