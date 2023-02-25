import React, { useEffect, useState } from 'react'
import george from "../../../img/george.png"
function George() {
  const [g,setG]=useState(george)
  useEffect(()=>{
    console.log('2')
  },[
  ])
  return (
    <div>George
        <img src={g}/>
    </div>
  )
}

export default George