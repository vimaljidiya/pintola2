import React from 'react'
import './Card2.css';
import { Carddata1 } from './Carddata';

const Card2 = ({value=[Carddata1]}) => {
  return (
  <>
         <div className='main2'>
        {
          value.map((item) => {
            return(
                <>
                
                <div class="card" style={{width:'320px'}}>
               
               <img src={item.image} class="card-img-top" alt="..." style={{width:'320px',height:'320px'}}/>
               <div class="card-body">
           <h5 class="card-title">{item.title}</h5>
           <p class="text">{item.text}<h1 className='rs'>{item.rs}</h1><p className='op'>{item.op}</p></p>

           <form>
           <select className="select">
               <option>{item.option1}</option> 
               <option>{item.option2}</option>
               <option>{item.option3}</option>
               <option>{item.option4}</option>
               

           
                    </select>
                    </form>    

                    <button type="submit" className="utn">Add to Cart</button>
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

export default Card2
