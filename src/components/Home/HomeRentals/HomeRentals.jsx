import React, { useEffect, useState } from 'react'
import Card from '../../Card/Card'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function HomeRentals() {

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

  const HomeRentalsData = [
    {StayImg:'/images/rentals-1.jpg',rentalNo:98, sub:'Rentals in Bhimtal'},
    {StayImg:'/images/rentals-2.jpg',rentalNo:112, sub:'Rentals in Vrindavan'},
    {StayImg:'/images/rentals-3.jpg',rentalNo:26, sub:'Rentals in Bhowali'},
    {StayImg:'/images/rentals-4.jpg',rentalNo:79, sub:'Rentals in Agra'},
    {StayImg:'/images/rentals-5.jpg',rentalNo:157, sub:'Rentals in Rishikesh'},
    {StayImg:'/images/rentals-6.jpg',rentalNo:74, sub:'Rentals in Mukteshwar'},
  ]

  return (
    <div>
         <h4 className='mb-1 fw-bold'>Home Rentals Near You</h4>
         <p><small>We think you'd enjoy these homes for a quick trip out of town.</small></p>
      <OwlCarousel className='owl-theme'  {...options}>
        {
            HomeRentalsData.map((item , index) =>(
           <div key={index} >
             <Card hotelVal={item}/>
           </div>
          ))
         }
         </OwlCarousel>
      </div>
  )
}

export default HomeRentals
