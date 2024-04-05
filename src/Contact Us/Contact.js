import React from 'react'
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMagnifyingGlass,faHouse,faUser,faImage,faPhone, } from '@fortawesome/free-solid-svg-icons'
import cont from '../Main-page/image/Cont.webp'
import lastimg2  from '../Main-page/image/lastimg2.webp'

const Contact = () => {
  return (
    <>
      <div className='contactmain'>
        <img src={cont} alt="" className='cont' />
      </div>

      <div className='contactmain2'>
       <div className='contactbox1'>
       <span className='syhello'>SAY HELLO!</span>
        <div className='contactfrom'>
        <p className='bold'><b>Company</b>-Das Foodtech Pvt Ltd</p>
        <p className='bold'><b>Email</b>-support@pintola.in</p>
        <p className='bold'><b>Phone</b>-91 989858 6036</p>
        <p className='bold'><b>Corporate Office</b>-304-305 Ganesh Glory, Jagatpur,
 <br />SG Highway Ahmedabad- 382481</p>
        <p className='bold'><b>Manufacturing Unit </b>-Block No. 1234, Salal-Sonasan Road, At. Sonasan, Ta. Prantij, Dist, Himatnagar, Gujarat 383210</p>
        <p className='bold'><b>Working Days</b>-Monday to Saturday</p>
        <p className='bold'><b>Timing</b>-9am to 6pm </p>
        <p className='bold'> <b className='folo'>Follow Us</b> </p>
       
        </div>
        
        <div className='iconics'>
         <FontAwesomeIcon icon={faHouse} className='ic' />
         <FontAwesomeIcon icon={faUser} className='ic' />
         <FontAwesomeIcon icon={faImage} className='ic'/>
         <FontAwesomeIcon icon={faPhone} className='ic' />
         <FontAwesomeIcon icon={faEnvelope} className='ic' />
          </div>
        
       </div>
       <div className='contactbox1'>
         <div className='contactbox2'>
          <div className='contactone'>
         <p className='cont-pb'><b>We'd love to hear from you! Fill out our contact form to get in touch with our team.</b> </p>
          <select name="cars" id="cars">
            <option value="n1">What can we help with?*</option>
            <option value="n2">For Dealership Inquiries</option>
            <option value="n3">For Exaport Inquiries</option>
            <option value="n4">Feedback</option>
          </select>
          <input type="text" name='contac' id='bike' placeholder='Name*' />
          <input type="text" name='contac' id='bike' placeholder='Email*' />
          <input type="text" name='contac' id='bike' placeholder='Phone Number*' />
          <input type="text" name='contac' id='bike' placeholder='Area/City*' />
          <input type="text" name='contac' id='bike' placeholder='Country(For export)*' />
           <textarea name="Message" id="bikes" cols="50" rows="7" placeholder='Messege*'></textarea>
          </div>

         </div>
         <input type="Submit"  id='sunmit1'/>
        
       </div>
      </div>

    <div className='location1'>
   <div className='loction-child'>

   <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14662.666107369652!2d72.73542!3d23.255219!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395dc66cd0000001%3A0xabd344b9cbc5a45!2sDAS%20FOODTECH%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sus!4v1703655698545!5m2!1sen!2sus" width="100%" height="395"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
   </div>
    </div>
    
    <div className='lastimg2'><img src={lastimg2 } alt=""  className='limg2'/> </div>

    </>
  )
}

export default Contact