import React, { useEffect, useState } from 'react'
import Card from '../../Card/Card'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function DreamTrip() {

  const options = {
    items:1,
    loop:true,
    autoplayTimeout:4000,
    nav:true,
    dots:true,
    margin:0,
    responsive:{
      1100:{
        items:4,
      },
      750:{
        items:3,
      },
      500:{
        items:2,
      },
      370:{
        items:2,
      }
    }
  }

  const DreamData = [
    {id:1,StayImg:'/images/Dream-1.jpg',heading:'Mussoorie, India'},
    {id:2,StayImg:'/images/Dream-2.jpg',heading:'Rishikesh, India'},
    {id:3,StayImg:'/images/Dream-3.jpg',heading:'Agra, India'},
    {id:4,StayImg:'/images/Dream-4.jpg',heading:'Dehradun, India'},
    {id:5,StayImg:'/images/Dream-5.jpg',heading:'Jim Corbett National Park, India'},
    {id:6,StayImg:'/images/Dream-6.jpg',heading:'New Tehri, India'},
  ]

  return (
    <div>
         <h4 className='mb-1 fw-bold'>Dream Your Next Trip</h4>
         <p><small>Weekend getaways from New Delhi</small></p>
      <OwlCarousel className='owl-theme'  {...options}>
        {
          DreamData.map((item , index) =>(
           <div key={index} className='item'>
              <Card hotelVal={item}/>
           </div>
          ))
         }
         </OwlCarousel>
      </div>
  )
}

export default DreamTrip
