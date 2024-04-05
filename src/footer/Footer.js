import React from 'react'
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMagnifyingGlass,faHouse,faUser,faImage,faPhone, } from '@fortawesome/free-solid-svg-icons'
import sl1 from '../Main-page/image/pintol.avif'
const Footer = () => {
  return (
    <>
      <div className='footer'>

        <div className='footer-child'>
         <div className="box">
         <div className='i1'><img src={sl1} alt="" id='im' /></div>
         <p className='follow'>Follow US:</p>
         <div className='iconics'>
         <FontAwesomeIcon icon={faHouse} className='ic' />
         <FontAwesomeIcon icon={faUser} className='ic' />
         <FontAwesomeIcon icon={faImage} className='ic'/>
         <FontAwesomeIcon icon={faPhone} className='ic' />
         <FontAwesomeIcon icon={faEnvelope} className='ic' />
         
         </div>
          </div>
         <div className="box">
          <h1 className='sh'>Shop</h1>
          <h5 className='all'>All Products</h5>
          <h5 className='pre'>Premium Nut Butters</h5>
          <h5 className='pre'>All Natural & Organic</h5>
          <h5 className='pre'>Wholegrain Rice Cakes</h5>

         </div>
         <div className="box">
         <h1 className='sh'>Pintola</h1>
         <h5 className='all'>AAbout Us</h5>
          <h5 className='pre'>Blogs</h5>
          <h5 className='pre'>Privacy Policy</h5>
          <h5 className='pre'>Terms of Service</h5>
          <h5 className='pre'>FAQs</h5>
          <h5 className='pre'>Refund & Cancellation Policy</h5>
          <h5 className='pre'>Shipping Policy</h5>

         </div>
         <div className="box">
         <h1 className='sh'>Stay in the loop</h1>
         <input type="email" id='email' name='email' placeholder='Email*'/>
         <input type="submit" value="Sign Up" id='submit' />
         </div>
         <div className="box">
         <h1 className='sh'>Download Product</h1>
         <h1 className='sh'>Catalogue</h1>
         <input type="submit" value="Download" id='dowlod' />

         </div>

        </div>
        
      </div>
    </>
  )
}

export default Footer
