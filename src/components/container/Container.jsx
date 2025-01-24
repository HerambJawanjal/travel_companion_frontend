import React from 'react'
import Card  from '../card/Card'


const Container = (props) => {
  if(props.places){
    console.log(props.places)
  }

  return (
    <>
    <div className='flex flex-wrap-reverse items-center justify-center overflow-auto  p-3 bg-slate-600 h-full rounded-md'>
    <Card/>
    <Card/>
    
    </div>
      </>
  )
}

export default Container