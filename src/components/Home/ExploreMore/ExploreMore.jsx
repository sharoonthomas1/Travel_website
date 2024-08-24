import React , {useState} from 'react'
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaMedal } from "react-icons/fa";


function ExploreMore() {
    const [filHeart , setFillHeart] = useState(false)

    const fillHeart = (id) =>{
      if(hotelVal.id === id){
        setFillHeart(true)
      }
    }

    const ExploreData = [
        {id:1,icon:'', heading:'Stunning Tours',exploreImg:'/images/explore-1.jpg',exploreContent:'7 national parks that are spectacular '},
        {id:2,icon:'', heading:'Successful Work',exploreImg:'/images/explore-2.jpg',exploreContent:'Here’s what’s new in Milan for 2024'},
        {id:3,icon:'', heading:'Travel Experts',exploreImg:'/images/explore-3.jpg',exploreContent:'Your guide to LGBTQ+ travel'},
    ]


  return (
    <div>
        <h4 className='mb-3 fw-bold'>More to explore</h4>
        <div className='row row-cols-lg-3 row-cols-md-2'>
          {
            ExploreData.map((item) =>(
                <div key={item.id} className="col ">
                    <div className='card border-0 m-2 card-shadow position-relative'>
                  <img src={item.exploreImg} alt="" height={'284px'}   className='rounded-2 object-fit-cover'/>
                  <button className='position-absolute border-0 z-3 end-0 top-0 m-2   bg-white px-2 py-1 rounded-circle'  data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                    <div onClick={() => fillHeart(hotelVal.id)}>
                          {
                            filHeart ? (<span className='text-danger'><FaHeart/></span>) : <FaRegHeart/>
                          }
                    </div>
                  </button>
                <div className='my-3 p-3'>
                  <h5 className='fw-bold mb-1'>{item.heading}</h5>
                  <a href='###' id='achorTag'>{item.exploreContent}</a>
                </div>
                    </div>
                </div>
            ))
          }
        </div>
        
    </div>
  )
}

export default ExploreMore
