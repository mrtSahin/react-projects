import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

function CharacterDetails() {

  const detail=useLocation().state
  //console.log(detail)

  useEffect(()=>{
    axios(detail.url).then(res=>console.log(res.data))
  },[])
  return (
    <div>CharacterDetails
      {}
    </div>
  )
}

export default CharacterDetails