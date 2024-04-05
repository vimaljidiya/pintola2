import React from 'react'
import Card from './Card/Card';
import Card2 from './Card/Card2';
import Card3 from './Card/Card3';
import Card4 from './Card/Card4';
import Card5 from './Card/Card5';
import Cartd6 from './Card/Card6';
import Carddata  from './Card/Carddata';
import { Carddata1 } from './Card/Carddata';
import { Carddata2 } from './Card/Carddata';
import { Carddata3 } from './Card/Carddata';
import { Carddata4 } from './Card/Carddata';
import { Carddata5 } from './Card/Carddata';
import Slider from './Card/Slider';
import Cardtitle from './Cardtitle/Cardtitle';


const Mainpage = () => {
  return (
  <>

      <Slider/>
      <Cardtitle Cardtitlename={'Best Seller'}/>
     <Card value={Carddata}/>
     <Cardtitle Cardtitlename={'Super Saver Combos'}/>
     <Card2 value={Carddata1}/>
     <Cardtitle Cardtitlename={'Newly Launched'}/>
       <Card3 value={Carddata2}/>
       <Cardtitle Cardtitlename={'Recent Blogs'}/>
       <Card4 value ={Carddata3}/> 
       <Cardtitle Cardtitlename={'All Products'}/>
       <Card5 value={Carddata4}/>
       <Cardtitle Cardtitlename={'Follow Us On Instagram @Pintola.in'}/>
      <Cartd6 value={Carddata5}/>
  </>
  )
}

export default Mainpage
