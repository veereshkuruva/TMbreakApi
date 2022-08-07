import React from 'react'
import CharItem from './CharItem'
import Spinner from './Spinner'

const CharacterGrid = ({items,isloading}) => {
  return isloading ? (<Spinner/>):
  (<section className='cards'>
   {items.map(ele=>(
  <CharItem  key={ele.char_id}  ele={ele}/>
   ))}
  </section>
  )
 
}

export default CharacterGrid