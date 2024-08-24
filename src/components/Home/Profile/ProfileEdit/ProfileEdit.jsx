import React ,{useState , useEffect}from 'react'
import { CiLock } from "react-icons/ci";

function ProfileEdit() {
  const [edit , setEdit] = useState(false)
  const [profileName, setProfileName] = useState('John Doe');
  const [userName, setUserName] = useState('Johnnnn.01');
  const [nameValue, setNameValue] = useState(profileName);
  const [userValue, setUserNameValue] = useState(userName);

  const convert = (e) =>{
    e.preventDefault()
    setProfileName(nameValue)
    setUserName(userValue)
    setEdit(false)
  }

  useEffect(()=>{
    const profileName = localStorage.getItem('profileName')
    if(profileName){
        setProfileName(profileName)
    }
  },[])

  useEffect(() =>{
    localStorage.setItem('profileName' , profileName)
  },[profileName])

  useEffect(()=>{
    const userName = localStorage.getItem('userName')
    if(userName){
        setUserName(userName)
    }
  },[])

  useEffect(() =>{
    localStorage.setItem('userName' , userName)
  },[userName])


   return (
    <div>
       <div className='p-3  shadowCustom'>
           <div className='d-flex align-items-center flex-wrap'>
           <img src="/public/images/profile.jpg" width={'180px'} alt="" />
           <div className='m-4 mt-md-0'> 
               <h4 className='fw-semibold mb-1'>{profileName}</h4>
               <p>@{userName}</p>
                <ul className='list-unstyled  d-flex ps-0 mt-3'>
                    <li className='mx-4 my-0 m-3 ms-0'>
                        <p className='fw-semibold text-black mb-1 fs-5'>Contributions</p>
                        <p>0</p>
                    </li>
                    <li className='mx-md-4 my-0 m-3'>
                        <p className='fw-semibold text-black mb-1 fs-5'>Followers</p>
                        <p>5</p>
                    </li>
                    <li className='mx-4 my-0 m-3'>
                        <p className='fw-semibold text-black mb-1 fs-5'>Following</p>
                        <p>12</p>
                    </li>
                </ul>
           </div>
            <button onClick={() => setEdit(true)} className='btn btn-outline-dark ms-auto mb-auto'>Edit profile</button>
           </div>
           <ul className='list-unstyled d-flex flex-wrap mb-0 ps-0'>
              <li className='mx-2'><small>Activity feed</small></li>
              <li className='mx-2'><small>Trips</small></li>
              <li className='mx-2'><small>Photos</small></li>
              <li className='mx-2'><small>Reviews</small></li>
              <li className='mx-2'><small>Forums</small></li>
              <li className='mx-2'><small>Badges</small></li>
              <li className='mx-2'><small>Travel map</small></li>
           </ul>
       </div>

     {/* ProfileEdit */}
     { edit &&
        (
            <div className="modal border-0 " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered ">
    <div className="modal-content shadowCustom accordion-buttonborder-0 ">
      <div className="modal-header border-0 ">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" onClick={() => setEdit(false)} ></button>
      </div>
      <div className="modal-body border-0 ">
        <form onSubmit={convert}>
            <div className="mb-3">
               <label for="exampleInputEmail1" className="form-label"><small>Name</small></label>
               <input type="name" value={nameValue} onChange={(e) => setNameValue(e.target.value)} className="form-control" id="Name" />
            </div>
            <div className="mb-3">
                 <label for="exampleInputPassword1" className="form-label"><small>Username</small></label>
                 <input type="name" value={userValue} onChange={(e) => setUserNameValue(e.target.value)}  className="form-control" id="Username"/>
            </div>
            <div className="mb-3">
                 <label for="exampleInputPassword1" className="form-label"><small>Current City</small></label>
                 <input type="search" className="form-control" id="Current"/>
            </div>
            <button onClick={() => setEdit(false)} className="btn me-3 btn-outline-dark ms-auto">Cancel</button>
            <button type='submit' className="btn btn-dark ms-auto">Done</button>
        </form>
      </div>
    </div>
  </div>
     </div>
        )
     }

     <div className='mt-lg-5 mt-3 d-flex flex-wrap'>
         <div className=' bg-white shadowCustom p-4'>
             <h4 className='mb-1'>Your Achievements</h4>
             <p><small>Start sharing to unlock</small></p>
             <div className='d-flex border-1 border p-2 rounded-2'>
                 <span className='fs-4'>  <CiLock/></span>
                   <div className='ms-3'>
                      <p className='mb-0 fw-semibold'> <small>Write your first review</small></p>
                      <p  className='mb-0' style={{fontSize:'13px'}}> <small>Write your first review</small></p>
                   </div>
             </div>
             <div className='d-flex border-1 border p-2 rounded-2 mt-2'>
                 <span className='fs-4'>  <CiLock/></span>
                   <div className='ms-3'>
                      <p className='mb-0 fw-semibold'> <small>Upload your first photo</small></p>
                      <p  className='mb-0' style={{fontSize:'13px'}}> <small>Unlock photo milestones</small></p>
                   </div>
             </div>
             <div className="d-grid mt-3">
                <button className='btn btn-dark'>View all</button>
             </div>
         </div>
         <div className='ms-5 d-flex justify-content-center align-items-center bg-white shadowCustom p-4 text-center'>
            <div>
            <h3 className='fw-semibold'>Fill Out Your Profile</h3>
            <p className='w-50 mx-auto text-center'>Add photos and info to your profile so people can find you easily and get to know you better!</p>
            </div>
         </div>
     </div>
    </div>
  )
}

export default ProfileEdit
