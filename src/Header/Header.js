import React from 'react'
import './Header.css';
import sl3 from '../Main-page/image/pintol.avif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faMagnifyingGlass,faCartShopping,faPhone, faBars} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
 <>
    <div className='mainH'>
      
      <div className='bars'><FontAwesomeIcon icon={faBars}className='bars1' /></div>
   
      <div className='id'>
     <Link to={'/'}> <img src={sl3} alt="" className='sl12' /></Link>
      </div>
  <div className='mouse'>
  <FontAwesomeIcon icon={faMagnifyingGlass}className='mouse1' />
  <FontAwesomeIcon icon={faCartShopping}className='mouse1' />
  <FontAwesomeIcon icon={faPhone}className='mouse1' />

  </div>
      <div className='piw2'>
        
        <ul>
           <Link to={'/Store'}> <li><a href="#">Store</a></li></Link>
          <Link to={'/whypimtola'}> <li><a href="#">Why Pintola?</a></li></Link>
         <Link to={'/Recieps'} > <li><a href="#">Recieps</a></li></Link> 
          <Link to={'/AboutUs'}>  <li><a href="#">About Us</a></li></Link>
            <Link to={'/ContactUs'}> <li><a href="#">Contact Us</a></li></Link> 
          <Link to={'/Trackmain'}><li><a href="#" id='moj' >Track Your Order</a></li></Link>
         </ul>
        
      </div>
      <div className='icons'>
   <Link to={'/Hellosing'} style={{textDecoration:"none"}}><div className='is1'><FontAwesomeIcon icon={faUser}  className='ic1'  /><p>HELLO, SIGN IN</p></div></Link>   
      <div className='is2'><FontAwesomeIcon icon={faMagnifyingGlass} className='ic2' /><p>SEARCH</p></div>  
      <div className='is3'><FontAwesomeIcon icon={faCartShopping} className='ic3'/><p>CART</p></div> 
     <Link to={'/ContactUs'} style={{textDecoration:"none"}}>  <div className='is4' ><FontAwesomeIcon icon={faPhone} className='ic4'/><p>CONTACT</p></div></Link>
       </div>
      </div> 

      <div></div>
 
 </>
  )
}

export default Header
