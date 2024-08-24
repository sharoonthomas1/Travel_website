import React, { useEffect, useState } from 'react'
import Card from '../../Card/Card'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Stay() {

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

  const stayData = [
    {StayImg:'/images/top-hotel.jpg',heading:'Top Hotels'},
    {StayImg:'/images/allhotel.jpg',heading:'All-Inclusive Hotels'},
    {StayImg:'/images/family.jpg',heading:'Family-Friendly Hotels'},
    {StayImg:'/images/lucuxy.jpg',heading:'Luxury Hotels'},
    {StayImg:'/images/friendly-hotel.jpg',heading:'Pet-Friendly Hotels'},
  ]

  return (
    <div>
         <h4 className='mb-1 fw-bold'>Stay somewhere award-winning</h4>
         <p><small>2024’s Travelers’ Choice Awards Best of the Best Hotels</small></p>
         <OwlCarousel className='owl-theme'  {...options}>
        {
          stayData.map((item , index) =>(
           <div key={index} className='item'>
               <Card hotelVal={item}/>
           </div>
          ))
         }
      </OwlCarousel>
      </div>
  )
}

export default Stay
