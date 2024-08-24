import React, { useEffect, useState } from 'react'
import {Card02,AddCart} from "/src/index.js"
import { AddCartProvider } from '../../../useContext/AddCart';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ShareIt from '../../ShareIt/ShareIt';

function YouLike() {
    const [addData , setAddData] = useState([])
    const [warning, setWarning] = useState(false)
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
      {id:1,rating:'321',bannerImg:'/images/taj.jpg',wayImg:'/images/youlike-4.jpg',heading:'Private Jaipur City Tour from Delhi by Car'},
      {id:2,rating:'1,690',bannerImg:'',wayImg:'/images/youlike-2.jpg',heading:'Sunrise Taj Mahal, Agra Fort & Baby Taj Tour from Delhi by Car'},
      {id:3,rating:'3,233',bannerImg:'',wayImg:'/images/youlike-3.jpg',heading:'Taj Mahal Day Tour from Delhi by Train'},
      {id:4,rating:'5,013',bannerImg:'',wayImg:'/images/youlike-1.jpg',heading:'Taj Mahal Day Tour from Delhi by Superfast Train - TOP RATED TOUR'},
      {id:5,rating:'459',bannerImg:'',wayImg:'/images/way-5.jpg',heading:'Private Luxury Delhi - Agra - Jaipur Golden Triangle Tour - 3 Nights 4 Days'},
      {id:6,rating:'862',bannerImg:'',wayImg:'/images/way-6.jpg',heading:'3-Day Private Luxury Golden Triangle Tour to Agra and Jaipur From New Delhi'},
      {id:7,rating:'1,225',bannerImg:'',wayImg:'/images/way-7.jpg',heading:'Private Half-Day Delhi City Tour With Entrance Fees'},
      {id:8,rating:'865',bannerImg:'',wayImg:'/images/way-8.jpg',heading:'Private 5-Day Ranthambhore Tiger Tour from Delhi including the Taj Mahal, Agra and Jaipur'},
      {id:9,rating:'125',bannerImg:'',wayImg:'/images/way-9.jpg',heading:'All Inclusive Day Trip to Taj Mahal, Agra Fort and Baby Taj from Delhi by Car'},
  ]

  console.log(addData)
  const handleAddCart = (data) =>{
      let isCheck = false;
      addData.map((item) =>{
        if(item.id === data.id){
          isCheck = true;
        }
      })

      if (isCheck) {
        return
      }
      setAddData([...addData , data])
  }
    
useEffect(() =>{
    const addData = JSON.parse(localStorage.getItem('addData'))
    if(addData){
      setAddData(addData)
    }
  
 },[])

 useEffect(() =>{
     localStorage.setItem('addData' , JSON.stringify(addData))
 },[addData])

  return (
    <div>
    <AddCartProvider value={{addData , setAddData}}>
         <h4 className='mb-1 fw-bold'>You might like these</h4>
         <p><small>More things to do in New Delhi</small></p>
         <OwlCarousel className='owl-theme'  {...options}>
        {
            wayData.map((item , index) =>(
           <div key={index} className='item'>
                 <Card02 AddCart={handleAddCart}  hotelVal={item}/>
           </div>
          ))
         }
      </OwlCarousel>
      <AddCart/>
    </AddCartProvider>
      </div>
  )
}

export default YouLike
