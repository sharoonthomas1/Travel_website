import React , {useState} from 'react'
import { RiHomeLine } from "react-icons/ri";
import { MdOutlineHotel } from "react-icons/md";
import { RiCoupon3Line } from "react-icons/ri";
import { IoRestaurantSharp } from "react-icons/io5";
import { MdOutlineBedroomParent } from "react-icons/md";
import {Green} from "/src/index.js"


function SearchBar() {
    const [inputPlace , setInputPlace] = useState('Places to go, things to do, hotels...')
    const [text , setText] = useState('Where to?')
    const [activeButton, setActiveButton] = useState(0);

    const tabs  = [
        {id:1, icon:<RiHomeLine/>, name:'Search All',heading:'Where to?',placeholder:'Places to go, things to do, hotels...'},
        {id:2,icon:<MdOutlineHotel/>, name:'Hotels',heading:'Stay somewhere great',placeholder:'Hotel name or destination'},
        {id:3,icon:<RiCoupon3Line/>, name:'Things to Do',heading:'Do something fun',placeholder:'Attraction, activity or destination'},
        {id:4, icon:<IoRestaurantSharp/>, name:'Restaurants',heading:'Find places to eat',placeholder:'Restaurant or destination'},
        {id:5, icon:<MdOutlineBedroomParent/>, name:'Vacation Rentals',heading:'Explore places to rent',placeholder:'Destination'},
    ]

    const handlerPlace = ( placeholder , heading , index ) =>{
        setInputPlace(placeholder)
        setText(heading)
        setActiveButton(index)
    }

  
    return (
       <div id='SeacrhBar' className='my-5 text-center'>
           <h1 className='fw-bolder display-4 mb-5'>{text}</h1>
           {
             tabs.map((item ,index) =>(
                <span key={item.id} 
                 id='placeBtn'
                 onClick={() => handlerPlace(item.placeholder , item.heading , index)}
                 className={activeButton === index ? 'text-black placeActive' : 'notActive'}
                 style={{margin:'16px'}}
                >
                <span className='me-2'>{item.icon}</span>
                <span>{item.name}</span>
                </span>
             ))
           }
           <div className='mt-4 mx-auto d-flex' style={{width:'70%'}}>
               <input type="search" className='form-control py-3 px-4 rounded-5 me-2' style={{boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'}} placeholder={inputPlace} />
               <Green props='Seacrh'/>
           </div>
       </div>
    );
}

export default SearchBar
