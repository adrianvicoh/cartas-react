import React, { useState, useEffect } from 'react';
import './App.css';
import CarruselHeader from './components/CarruselHeader';
import CarruselMarca from './components/CarruselMarca';
import BaseController from './controllers/BaseController';
import { Container, Row, Col } from 'react-bootstrap';

function Home() {
  const [noticias, setNoticias] = useState([]);
  const tableName = 'your_table_name';

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

  return (
    <>
    <Container>
    <p>Home</p>
      <Row>
        <CarruselHeader noticias={noticias} />
      </Row>
      <Row>
        <CarruselMarca noticias={noticias} />
      </Row>
    </Container>
    </>
  );
}
export default Home;