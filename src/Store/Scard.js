import React from 'react'
import './Scatd.css';
import Scarddata from './Scarddata';

const Scard = ({value=[Scarddata]}) => {
  return (
   <>
   <div className='Scardmain'>
        {
          value.map((item) => {
            return(
                <>
                
                <div className="cardmin1" style={{width:'220px'}}>
               
               <img src={item.image} className="cit" alt="..." style={{width:'220px',height:'220px'}}/>
               <div class="card-body">
           <h5 class="c-titless">{item.titless}</h5>
           <p class="c-textes">{item.textes} <p className="c-fromes">{item.fromes}</p> <p className='rss'>{item.rss}</p><h1 className='opp'>{item.opp}</h1></p>

           <form>
           <select className="form-selectes">
               <option>{item.option1}</option> 
               <option>{item.option2}</option>
               <option>{item.option3}</option>
               <option>{item.option4}</option>
               <option>{item.option5}</option>
               <option>{item.option6}</option>
               <option>{item.option7}</option>
               <option>{item.option8}</option>

           
                    </select>
                    </form>    

                    <button type="submit" className="btnn">Add to Cart</button>
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

export default Scard
