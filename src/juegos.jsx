import { useState } from 'react'
import './App.css'
import { useParams } from "react-router-dom";

function Juegos() {

  const { id } = useParams()
  
  return (
    <>
      <p>Juegos</p>
      <p>{id}</p>
    </>
  )
}

export default Juegos