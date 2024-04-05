import React from 'react'
import './Track.css';
import Trackimg from '../Main-page/image/Trackimg.png'
const Track = () => {
  return (
    <>
    <h2 className='tarckh3'>Track your order</h2>
    <div className='trackmain'>
       <div className='trackbox'>
        <div className='tarckboxing'><img src={Trackimg}alt="" className='Trackimg'/></div>

        <div className='tarckboxing'>
            <div className='trackbox-child'>
                <div className='tchild'>
                    <div className='tchid1'>Order Number</div>
                    <div className='tchid2'>Tracking Number</div>
                </div>
               <p className='trackp'><b>Enter the information in the box below to check the status of your order</b></p>
               <input type="text" name='orde' id='trackfrom' placeholder='Order No.' />
               <input type="text" name='orde' id='trackfrom' placeholder='Email or Phone Number' />
               <input type="submit" value ='Track' id='tarckbutton' />
            </div>
        </div>
       </div>
       
    </div>
    </>
  )
}

export default Track