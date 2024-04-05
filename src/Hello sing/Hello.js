import React from 'react'
import './Hello.css';
const Hello = () => {
  return (
   <>

   <div className='hellobution'>
    <div className='buttion-child1'>Login</div>
    <div className='buttion-child2'>Sing Up</div>
   </div>

   <div className='helloform1'>
    <div className='helloform1-child'>
      <div className='helloheading'>
        <h1 className='helloh1'>Customer Login</h1>
        <div className='hr'></div>
      </div>
      <div className='label1'>
      <label htmlFor="hellolabel1">Email address*</label><br />
    <input type="text" id='hellolabel1' name='hellolabel1' placeholder='Email address' />
 </div>
    
 <div className='label2'>
      <label htmlFor="hellolabel1">Password*</label><br />
    <input type="text" id='hellolabel1' name='hellolabel1' placeholder='Password' />
 </div>
    <input type="submit" value='Login' id='hellologin' />
    <p className='hellop'>New Customer? Sign up</p>

    </div>
   
   </div>




   <div className='helloform2'>
    <div className='helloform2-child'>
      <div className='helloheading2'>
        <h1 className='helloh1'>Create Account</h1>
        <div className='hr'></div>
      </div>
      <div className='label1'>
      <label htmlFor="hellolabel1">First name</label><br />
    <input type="text" id='hellolabel2' name='hellolabel1' placeholder='First name' />
 </div>
    
 <div className='label2'>
      <label htmlFor="hellolabel1">Last name</label><br />
    <input type="text" id='hellolabel2' name='hellolabel1' placeholder='Last name' />
 </div>
 <div className='label1'>
      <label htmlFor="hellolabel1">Email address*</label><br />
    <input type="text" id='hellolabel2' name='hellolabel1' placeholder='Email address*' />
 </div>
 <div className='label1'>
      <label htmlFor="hellolabel1">Password*</label><br />
    <input type="text" id='hellolabel2' name='hellolabel1' placeholder='Password*' />
 </div>
    <input type="submit" value='Sign Up' id='hellologin2' />
    <p className='hellop'>Returning Customer?Login</p>

    </div>
   
   </div>
   </>
  )
}

export default Hello