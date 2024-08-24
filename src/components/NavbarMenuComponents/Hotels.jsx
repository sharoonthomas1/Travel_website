import React from 'react'
import Bg_search from './Bg_search'
import Card02 from '../Card-2/Card02';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Hotels() {

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

  const wayData = [
    {id:1,rating:'321',bannerImg:'/images/taj.jpg',wayImg:'/images/hotel-1.jpg',price:'from $15 per adult',heading:'Same Day Taj Mahal Tour from Delhi'},
    {id:2,rating:'1,690',bannerImg:'',wayImg:'/images/hotel-2.jpg',price:'from $20 per adult',heading:'Private Full Day Old and Delhi City Tour'},
    {id:3,rating:'3,233',bannerImg:'',wayImg:'/images/way-3.jpg',price:'from $196 per adult',heading:'Four-Day Private Luxury Golden Triangle Tour to Agra and Jaipur From New Delhi'},
    {id:4,rating:'5,013',bannerImg:'',wayImg:'/images/way-4.jpg',price:'from $10 per adult',heading:'Private Taj Mahal Tour from Delhi by Car'},
    {id:5,rating:'459',bannerImg:'',wayImg:'/images/way-5.jpg',price:'from $25 per adult',heading:'Private Luxury Delhi - Agra - Jaipur Golden Triangle Tour - 3 Nights 4 Days'},
    {id:6,rating:'862',bannerImg:'',wayImg:'/images/way-6.jpg',price:'from $30 per adult',heading:'3-Day Private Luxury Golden Triangle Tour to Agra and Jaipur From New Delhi'},
    {id:7,rating:'1,225',bannerImg:'',wayImg:'/images/way-7.jpg',price:'from $35 per adult',heading:'Private Half-Day Delhi City Tour With Entrance Fees'},
    {id:8,rating:'865',bannerImg:'',wayImg:'/images/way-8.jpg',price:'from $60 per adult',heading:'Private 5-Day Ranthambhore Tiger Tour from Delhi including the Taj Mahal, Agra and Jaipur'},
    {id:9,rating:'125',bannerImg:'',wayImg:'/images/way-9.jpg',price:'from $123 per adult',heading:'All Inclusive Day Trip to Taj Mahal, Agra Fort and Baby Taj from Delhi by Car'},
]
  const wayData01 = [
    {id:1,rating:'321',bannerImg:'/images/taj.jpg',wayImg:'/images/hotel-3.jpg',price:'from $15 per adult',heading:'Same Day Taj Mahal Tour from Delhi'},
    {id:2,rating:'1,690',bannerImg:'',wayImg:'/images/hotel-4.jpg',price:'from $20 per adult',heading:'Private Full Day Old and Delhi City Tour'},
    {id:3,rating:'3,233',bannerImg:'',wayImg:'/images/hotel-5.jpg',price:'from $196 per adult',heading:'Four-Day Private Luxury Golden Triangle Tour to Agra and Jaipur From New Delhi'},
    {id:4,rating:'5,013',bannerImg:'',wayImg:'/images/hotel-6.jpg',price:'from $10 per adult',heading:'Private Taj Mahal Tour from Delhi by Car'},
    {id:5,rating:'459',bannerImg:'',wayImg:'/images/way-5.jpg',price:'from $25 per adult',heading:'Private Luxury Delhi - Agra - Jaipur Golden Triangle Tour - 3 Nights 4 Days'},
    {id:6,rating:'862',bannerImg:'',wayImg:'/images/way-6.jpg',price:'from $30 per adult',heading:'3-Day Private Luxury Golden Triangle Tour to Agra and Jaipur From New Delhi'},
    {id:7,rating:'1,225',bannerImg:'',wayImg:'/images/way-7.jpg',price:'from $35 per adult',heading:'Private Half-Day Delhi City Tour With Entrance Fees'},
    {id:8,rating:'865',bannerImg:'',wayImg:'/images/way-8.jpg',price:'from $60 per adult',heading:'Private 5-Day Ranthambhore Tiger Tour from Delhi including the Taj Mahal, Agra and Jaipur'},
    {id:9,rating:'125',bannerImg:'',wayImg:'/images/way-9.jpg',price:'from $123 per adult',heading:'All Inclusive Day Trip to Taj Mahal, Agra Fort and Baby Taj from Delhi by Car'},
]


  return (
    <div>
      <div id='hotelHead' className='position-absolute z-1 display-6 fw-bold text-white '>
      </div>
      <div className='position-relative'>
         <Bg_search img={'/images/resto.jpg'}/>
      </div>
      <div className='mt-5'>
         <h4 className='mb-3 fw-bold'>Recently viewed</h4>
         <OwlCarousel className='owl-theme'  {...options}>
        {
            wayData.map((item , index) =>(
           <div key={index} >
                 <Card02 hotelVal={item}/>
           </div>
          ))
         }
         </OwlCarousel>
      </div>
      <div className='mt-5'>
         <h4 className='mb-3 fw-bold'>Recently viewed</h4>
         <OwlCarousel className='owl-theme'  {...options}>
        {
            wayData01.map((item , index) =>(
           <div key={index} >
                 <Card02 hotelVal={item}/>
           </div>
          ))
         }
         </OwlCarousel>
      </div>
    </div>
  )
}

export default Hotels
