import React from 'react'
import './Card4.css';
import { Carddata3 } from './Carddata';

const Card4 = ({value=[Carddata3]}) => {
  return (
  <>
    <div className='main4'>
        {
          value.map((item) => {
            return(
                <>
                
                <div class="card1" style={{width:'319px'}}>
               
               <img src={item.image} class="card-img-top1" alt="..." style={{width:'319px'}}/>
               <div class="card-bode">
           <h5 class="card-titlee">{item.titlee}</h5>
           <p className='min'>{item.min} <span className='semp'>{item.semp}</span> <span className='pum'>{item.pum}</span> </p>
             </div> 
           </div>
                </>
            )
          })
        }

    </div>
     
  </>
  )
}

export default Card4
