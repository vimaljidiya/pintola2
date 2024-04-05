import React from 'react'
import './About.css';
import aboutmain2 from '../Main-page/image/aboutmain2.webp'
import lastimg2  from '../Main-page/image/lastimg2.webp'


const Aboutcard = () => {
  return (
  <>
  <div className='aboutmain'>
    <div className='aboutmin'>
        <h2>Our Mission & Vision</h2>
        <div className='amin2'>
     <p>To serve more than 100 million people with the healthy, delicious and ready-to-eat food products.</p>
     <p>To achieve continuous business growth together with our stakeholders including farmers, exporters and distributors.</p>
     <p>We strive to be the best company in India for peanut butter and related products. We endeavor to achieve this goal by providing competitive products in all means.</p>
        </div>
    </div>
     </div>

     <div className='aboutmain2'><img src={aboutmain2} alt="" className='ab2' /></div>
     <div className='lastimg2'><img src={lastimg2 } alt=""  className='limg2'/> </div>

  </>
  )
}

export default Aboutcard