import React from 'react'
import Storeimage from './Storeimage'
import Scard from './Scard'
import Scarddata from './Scarddata'

const Store = () => {
  return (
   <>
    <Storeimage/>
    
    <Scard value={Scarddata}/>
   </>
  )
}

export default Store
