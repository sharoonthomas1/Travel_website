import React ,{useState} from 'react'
import { NavLink } from 'react-router-dom'

function ContactDetails() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
      });
    
      const [errors, setErrors] = useState({});
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const validate = () => {
        let formErrors = {};
        if (!formData.name) formErrors.name = 'Name is required';
        if (!formData.email) {
          formErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          formErrors.email = 'Email address is invalid';
        }
        if (!formData.phone) {
            formErrors.phone = 'Phone number is required';
          } else if (!/^\d{10}$/.test(formData.phone)) {
            formErrors.phone = 'Phone number must be 10 digits';
          }
        return formErrors;
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validate();
        setErrors(formErrors);
    
        if (Object.keys(formErrors).length === 0) {
          // Submit the form (e.g., send data to the server)
          console.log('Form data:', formData);
        }
      };
  return (
    <div >
    <h4 className='fw-bold'>Contact Details</h4>
    <p>We'll use this information to send you confirmation and updates about your booking.</p>
    <form onSubmit={handleSubmit} className='row g-3 mt-4'>
      <div className='col-md-6'>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className='form-control'
        />
        {errors.name && <span className='text-danger'><small>{errors.name}</small></span>}
      </div>
      <div className='col-md-6'>
        <label>Last</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className='form-control'
        />
        {errors.name && <span className='text-danger'><small>{errors.name}</small></span>}
      </div>
      <div className='col-md-12'>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
           className='form-control'
        />
        {errors.email && <span className='text-danger'><small>{errors.email}</small></span>}
      </div>
      <div className='col-md-6'>
        <label>Password</label>
        <input
          type="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className='form-control'
        />
        {errors.phone && <span className='text-danger'><small>{errors.phone}</small></span>}
      </div>
       <div className='mt-5'>
         <h4 className='fw-bold pb-3 border-bottom border-1'>Promo Code</h4>
         <a href="##" className='pt-3 text-success'><small>Enter Promo Code</small></a>
         <div className="d-grid">
         <button type="submit" className='btn btn-dark mt-5 py-3 rounded-5 fw-bold'>Next</button>
         </div>
       </div>
    </form>
    </div>
  )
}

export default ContactDetails
