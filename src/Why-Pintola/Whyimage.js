import React from 'react'
import './Whyimge.css';
import whyimges from '../Main-page/image/whyimg.webp'
import whybox1  from '../Main-page/image/whybox1.avif'
import whybox2  from '../Main-page/image/whybox2.webp'
import whybox3   from '../Main-page/image/whybox3.avif'
import whybox4   from '../Main-page/image/whybox4.webp'
import whybox5   from '../Main-page/image/whybox5.avif'
import whybox6  from '../Main-page/image/whybox6.avif'
import whyboxin1 from '../Main-page/image/whyboxin1.webp'
import whyboxin2 from '../Main-page/image/whyboxin2.webp'
import whyboxin3 from '../Main-page/image/whyboxin3.webp'
import whyboxin4 from '../Main-page/image/whyboxin4.webp'
import whyboxin5 from '../Main-page/image/whyboxin5.webp'
import whyboxin6 from '../Main-page/image/whyboxin6.webp'
import whyboxin7 from '../Main-page/image/whyboxin7.webp'
import lastbox1  from '../Main-page/image/lastbox1.webp'
import lastbox2  from '../Main-page/image/lastbox2.webp'
import lastbox3  from '../Main-page/image/lastbox3.webp'
import lastbox4  from '../Main-page/image/lastbox4.webp'
import lastimg2  from '../Main-page/image/lastimg2.webp'





const Whyimage = () => {
  return (
   <>
     
        <img src={whyimges} alt="" className='why' />
    

     <div className='whymain2'>
      <div className='whybox'>
        <img src={whybox1} alt="" className='wbimg1'/>
        <h3 className='whyh3'>High Quality Product</h3>
      </div>
      <div className='whybox'>
      <img src={whybox2} alt="" className='wbimg1'/>
        <h3 className='whyh3'>High Protein - High Fiber </h3>
      </div>
      <div className='whybox'>
      <img src={whybox3} alt="" className='wbimg1'/>
        <h3 className='whyh3'>10 Lakh+ Happy Customer</h3>
      </div>
      <div className='whybox'>
      <img src={whybox4} alt="" className='wbimg1'/>
        <h3 className='whyh3'>Top Quality Certifications</h3>
      </div>
      <div className='whybox'>
      <img src={whybox5} alt="" className='wbimg1'/>
        <h3 className='whyh3'>100% Freshly Made</h3>
      </div>
      <div className='whybox'>
      <img src={whybox6} alt="" className='wbimg1'/>
        <h3 className='whyh3'>More than 5 Lakh+ Reviews</h3>
      </div>
     </div>

      <div className='whycontinue'>
        <div className='whyboxing'>
        <div className='whyboxing1'>
         <div className='whyboxmin1'> <img src={whyboxin1} alt="" className='wbi1'/></div>

        </div>
        <div className='whyboxing2'><div className='whyboxmin2'>
          <h3 className='whyheading1'>Certified Organic Peanuts</h3>
          <p className='whypg'>We pick the best quality organic peanuts from organic farms certified by USDA Organic, SGS Organic, India Organic and Jaivik Bharat. Peanuts are checked for moisture and aflatoxin content</p>
          </div>
          </div>
        </div>
      </div>


      {/* box 2 start */}

      <div className='whycontinue'>
        <div className='whyboxing'>
        <div className='whyboxing1'>
        <div className='whyboxmin2'>
          <h3 className='whyheading1'>Sorting & Grading of Peanuts</h3>
          <p className='whypg'>Only uniform big size nutritious peanuts are selected and handpicked. Small size peanuts and other dirt particles are rejected and removed</p>
          </div>
        </div>
        <div className='whyboxing2'>
        <div className='whyboxmin1'> <img src={whyboxin2} alt="" className='wbi1'/></div>

          </div>
        </div>
      </div>

      {/* box 3 start */}

      <div className='whycontinue'>
        <div className='whyboxing'>
        <div className='whyboxing1'>
         <div className='whyboxmin1'> <img src={whyboxin3} alt="" className='wbi1'/></div>

        </div>
        <div className='whyboxing2'><div className='whyboxmin2'>
          <h3 className='whyheading1'>Continuous Roasting</h3>
          <p className='whypg'>Handpicked peanuts are then roasted according to batch size. Proper process control is followed to get identical roasting of every peanut. Roasted peanuts are cooled down & blanched. 100% batch inspection is done to assure that Pintola's customers get the top quality products.</p>
          </div>
          </div>
        </div>
      </div>
  
      {/* box 4 start */}

      <div className='whycontinue'>
        <div className='whyboxing'>
        <div className='whyboxing1'>
        <div className='whyboxmin2'>
          <h3 className='whyheading1'>Sorting</h3>
          <p className='whypg'>Over-roasted peanuts are rejected under quality control process</p>
          </div>
        </div>
        <div className='whyboxing2'>
        <div className='whyboxmin1'> <img src={whyboxin4} alt="" className='wbi1'/></div>

          </div>
        </div>
      </div>


      {/* box 5 start */}

      <div className='whycontinue'>
        <div className='whyboxing'>
        <div className='whyboxing1'>
         <div className='whyboxmin1'> <img src={whyboxin5} alt="" className='wbi1'/></div>

        </div>
        <div className='whyboxing2'><div className='whyboxmin2'>
          <h3 className='whyheading1'>Grinding</h3>
          <p className='whypg'>Grinding of the roasted peanuts is done with USA imported stainless steel machinery to make ultra smooth paste</p>
          </div>
          </div>
        </div>
      </div>


      {/* box 6 start */}

      <div className='whycontinue'>
        <div className='whyboxing'>
        <div className='whyboxing1'>
        <div className='whyboxmin2'>
          <h3 className='whyheading1'>Filling The Goodness In Pintola Jars</h3>
          <p className='whypg'>Freshly made Pintola All Natural Organic Peanut Butter is filled in the jars & packed to get shipped it to you.</p>
          </div>
        </div>
        <div className='whyboxing2'>
        <div className='whyboxmin1'> <img src={whyboxin6} alt="" className='wbi1'/></div>

          </div>
        </div>
      </div>

      {/* box 7 start */}


      <div className='whycontinue'>
        <div className='whyboxing'>
        <div className='whyboxing1'>
         <div className='whyboxmin1'> <img src={whyboxin7} alt="" className='wbi1'/></div>

        </div>
        <div className='whyboxing2'><div className='whyboxmin2'>
          <h3 className='whyheading1'>Lab Testing</h3>
          <p className='whypg'>Every Batch is tested before dispatch so Pintola’s customers get 100% quality assured product.</p>
          </div>
          </div>
        </div>
      </div>

        <div className='headingp'><h2>Happy Customers</h2></div>

      <div className='whylastbox'>
        <div className='lastbox1'><img src={lastbox1} alt="" className='lastimg1' /></div>
        <div className='lastbox1'><img src={lastbox2} alt=""  className='lastimg1'/></div>
        <div className='lastbox1'><img src={lastbox3} alt="" className='lastimg1' /></div>
        <div className='lastbox1'><img src={lastbox4} alt=""  className='lastimg1'/></div>
      </div>


      <div className='lastimg2'><img src={lastimg2 } alt=""  className='limg2'/> </div>

   </>
  )
}

export default Whyimage
