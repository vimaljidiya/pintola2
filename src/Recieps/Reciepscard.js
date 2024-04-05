import React from 'react'
import './Reciepscard.css';
import Recip1 from '../Main-page/image/Recip1.webp'
import Recip2 from '../Main-page/image/Recip2.webp'
import Recip3 from '../Main-page/image/Recip3.webp'
import Recip4 from '../Main-page/image/Recip4.webp'
import Recip5 from '../Main-page/image/Recip5.webp'
import Recip6 from '../Main-page/image/Recip6.webp'
import Recip7 from '../Main-page/image/Recip7.webp'


const Reciepscard = () => {
  return (
   <>
     <div className='reh1'><h1>Healthy & Delicious Recipes</h1></div>
     <div className='recipsmain'>
        <div className='recipsbox'>
          <div className='reci-child'> <img src={Recip1} alt="" style={{objectFit:"cover",objectPosition:"15px 35px" }} className='Recipimg1'/></div>
          <div className='content-blog'><h4 className='th4'>Pintola Peanut Butter Chilli Noodles</h4><span>1 min read</span></div>
        </div>
        <div className='recipsbox'>
        <div className='reci-child'> <img src={Recip2} alt="" style={{objectFit:"cover",objectPosition:"15px 35px" }} className='Recipimg1'/></div>
          <div className='content-blog'><h4 className='th4'>Pintola Peanut Butter & Jelly Bread Pudding</h4><span>1 min read</span></div>
        </div>

        <div className='recipsbox'>
        <div className='reci-child'> <img src={Recip3} alt="" style={{objectFit:"cover",objectPosition:"15px 35px" }} className='Recipimg1'/></div>
          <div className='content-blog'><h4 className='th4'>Pintola Peanut Butter Granola Recipe</h4><span>1 min read</span></div>
        </div>

        <div className='recipsbox'>
        <div className='reci-child'> <img src={Recip4} alt="" style={{objectFit:"cover",objectPosition:"15px 35px" }} className='Recipimg1'/></div>
          <div className='content-blog'><h4 className='th4'>Pintola Cashew Butter Oat Meal</h4><span>1 min read</span></div>
        </div>

        <div className='recipsbox'> <div className='reci-child'> <img src={Recip5} alt="" style={{objectFit:"cover",objectPosition:"15px 35px" }} className='Recipimg1'/></div>
          <div className='content-blog'><h4 className='th4'>Pintola Almond Butter Salad</h4><span>1 min read</span></div></div>

        <div className='recipsbox'> <div className='reci-child'> <img src={Recip6} alt="" style={{objectFit:"cover",objectPosition:"15px 35px" }} className='Recipimg1'/></div>
          <div className='content-blog'><h4 className='th4'>Pintola Peanut Butter & Jam Multigrain Sandwich</h4><span>1 min read</span></div></div>

        <div className='recipsbox'> <div className='reci-child'> <img src={Recip7} alt="" style={{objectFit:"cover",objectPosition:"15px 35px" }} className='Recipimg1'/></div>
          <div className='content-blog'><h4 className='th4'>Pintola Smoothie</h4><span>1 min read</span></div></div>
     </div>
   </>
  )
}

export default Reciepscard
