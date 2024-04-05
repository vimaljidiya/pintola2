import React from 'react'
import './Cardtitle.css'

const Cardtitle = ({Cardtitlename}) => {
  return (
   <>
   <div className='cardtitle'>

    <div className='cardtitle-beta'>
        <a href="#" className='cardname'>{Cardtitlename}</a>
    </div>
   </div>
   </>
  )
}

export default Cardtitle
