import React, { useEffect, useState } from 'react'
import Card from '../../Card/Card'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function PastExperience() {

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

  const PastExperienceData = [
    {id:1,StayImg:'/images/past-1.jpg',heading:'Yellowstone National Park, WY'},
    {id:2,StayImg:'/images/past-2.jpg',heading:'Punta Cana, Dominican'},
    {id:3,StayImg:'/images/past-3.jpg',heading:'Orlando, FL'},
    {id:4,StayImg:'/images/past-4.jpg',heading:'Sedona, AZ'},
    {id:5,StayImg:'/images/past-5.jpg',heading:'Cancun, Mexico'},
    {id:6,StayImg:'/images/past-6.jpg',heading:'New York City, NY'},
    {id:7,StayImg:'/images/past-7.jpg',heading:'Las Vegas, NV'},
    {id:8,StayImg:'/images/past-8.jpg',heading:'Yosemite National Park, CA'},
  ]

  return (
    <div>
         <h4 className='mb-1 fw-bold'>Past experiences</h4>
         <p><small>Weekend getaways from New Delhi</small></p>
         <OwlCarousel className='owl-theme'  {...options}>
        {
            PastExperienceData.map((item , index) =>(
           <div key={index} >
              <Card hotelVal={item}/>
           </div>
          ))
         }
         </OwlCarousel>
      </div>
  )
}

export default PastExperience
