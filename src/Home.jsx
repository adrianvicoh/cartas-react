import React, { useState, useEffect } from 'react';
import './App.css';
import CarruselHeader from './components/CarruselHeader';
import CarruselMarca from './components/CarruselMarca';
import BaseController from './controllers/BaseController';
import { Container, Row, Col } from 'react-bootstrap';

function Home() {
  const [noticias, setNoticias] = useState([]);
  const tableName = 'Noticias'; 

  useEffect(() => {
    async function getAllNoticias() {
      const noticiasController = new BaseController('m5hnoxg67k8a156', tableName);
      const noticiasData = await noticiasController.getAll();
      if (noticiasData.length) {
        setNoticias(noticiasData);
      } else {
        console.log('No data found:', noticiasData);
      }
    }
    getAllNoticias();
  }, []);

  const [yugioh, setYugioh] = useState([]);
  const tableNames = 'Yu-Hi-Oh'; 

  useEffect(() => {
    async function getAllNoticias() {
      const yugiohController = new BaseController('mna1v9pmt69h5rd', tableNames);
      const yugiohData = await yugiohController.getAll();
      if (yugiohData.length) {
        setNoticias(yugiohData);
      } else {
        console.log('No data found:', yugiohData);
      }
    }
    getAllNoticias();
  }, []);

  return (
    <>
    <Container>
    <p>Home</p>
      <Row>
        <CarruselHeader images={noticias} />
      </Row>
      <Row>
        <CarruselMarca images={yugioh} />
      </Row>
    </Container>
    </>
  );
}
export default Home;