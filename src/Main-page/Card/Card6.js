import React from 'react'
import './Card6.css';
import { Carddata5 } from './Carddata';

const Cartd6 = ({value={Carddata5}}) => {
  return (
   <>
    <div className='main6'>
        {
          value.map((item) => {
            return(
                <>
                
                <div class="card" style={{width:'220px'}}>
               
               <img src={item.image} class="card-img-top" alt="..." style={{width:'220px',height:'220px'}}/>
              
           </div>
                </>
            )
          })
        }

    </div>
   </>
  )
}

export default Cartd6
