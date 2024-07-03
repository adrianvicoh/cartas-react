import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import BaseController from './controllers/baseController';

function Cartas() {

  const { id } = useParams()
  
  return (
    <>
      <p>Cartas</p>
    </>
  )
}

export default Cartas