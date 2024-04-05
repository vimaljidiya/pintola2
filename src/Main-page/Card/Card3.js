import React from 'react'
import './Card3.css';
import { Carddata2 } from './Carddata';

const Card3 = ({value=[Carddata2]}) => {
  return (
   <>
      <div className='main3'>
        {
          value.map((item) => {
            return(
                <>
                
                <div class="card" style={{width:'265px'}}>
               
               <img src={item.image} class="card-img-top" alt="..." style={{width:'265px',height:'265px'}}/>
               <div class="card-body">
           <h5 class="card-title">{item.title}</h5>
           <p class="card-text">{item.text} <p className="cart-from">{item.from}</p> <h1 className='rs'>{item.rs}</h1><p className='op'>{item.op}</p></p>

           <form>
           <select className="fs"> 
               <option>{item.option1}</option> 
               <option>{item.option2}</option>
               

           
                    </select>
                    </form>    

                    <button type="submit" className="nt">Add to Cart</button>
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

export default Card3
