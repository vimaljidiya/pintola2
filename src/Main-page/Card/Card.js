import React from 'react'
import './Card.css';
import Carddata from './Carddata';

const Card = ({value=[Carddata]}) => {
  return (
    <>
    <div className='mainm'>
        {
          value.map((item) => {
            return(
                <>
                
                <div className="card" style={{width:'280px'}}>
               
               <img src={item.image} class="card-img-top" alt="..." style={{width:'280px',height:'280px'}}/>
               <div class="card-body">
           <h5 class="card-title">{item.title}</h5>
           <p class="card-text">{item.text} <p className="cart-from">{item.from}</p> <p className='rs'>{item.rs}</p><h1 className='op'>{item.op}</h1></p>

           <form>
           <select className="form-select">
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

                    <button type="submit" className="btn">Add to Cart</button>
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

export default Card;
