import React, { useState, useEffect } from 'react';
import './App.css';
import CarruselHeader from './components/CarruselHeader';
import CarruselMarca from './components/CarruselMarca';
import BaseController from './controllers/baseController';
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
        setYugioh(yugiohData);
      } else {
        console.log('No data found:', yugiohData);
      }
    }
    getAllNoticias();
  }, []);

  const [pokemon, setPokemon] = useState([]);
  const tableNamesp = 'Pokemon';

  useEffect(() => {
    async function getAllNoticias() {
      const pokemonController = new BaseController('mu0huocera3el49', tableNamesp);
      const pokemonData = await pokemonController.getAll();
      if (pokemonData.length) {
        setPokemon(pokemonData);
      } else {
        console.log('No data found:', pokemonData);
      }
    }
    getAllNoticias();
  }, []);

  const [magic, setMagic] = useState([]);
  const tableNamesm = 'Magic';

  useEffect(() => {
    async function getAllNoticias() {
      const magicController = new BaseController('mwfhammpc10rp9k', tableNamesm);
      const magicData = await magicController.getAll();
      if (magicData.length) {
        setMagic(magicData);
      } else {
        console.log('No data found:', magicData);
      }
    }
    getAllNoticias();
  }, []);

  const [dragon, setDragon] = useState([]);
  const tableNamesd = 'Dragon Ball';

  useEffect(() => {
    async function getAllNoticias() {
      const dragonController = new BaseController('mwwmrnif2aa0wff', tableNamesd);
      const dragonData = await dragonController.getAll();
      if (dragonData.length) {
        setDragon(dragonData);
      } else {
        console.log('No data found:', dragonData);
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
        <div className='yugioh'>
          <img className='m-5' src='https://ms.yugipedia.com//thumb/8/8d/Yu-Gi-Oh%21_TCG_new_logo.jpg/1200px-Yu-Gi-Oh%21_TCG_new_logo.jpg' height={150} width={360} />
          <Row>
            <CarruselMarca images={yugioh} />
          </Row>
        </div>
        <div className='pokemon'>
        <img className='m-3' src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Pok%C3%A9mon_Trading_Card_Game_logo.svg/2560px-Pok%C3%A9mon_Trading_Card_Game_logo.svg.png' height={190} width={360} />
        <Row>
          <CarruselMarca images={pokemon} />
        </Row>
        </div>
        <div className='magic'>
        <img className='m-1' src='https://1000logos.net/wp-content/uploads/2022/10/Magic-The-Gathering-logo.png' height={190} width={280} />
        <Row>
          <CarruselMarca images={magic} />
        </Row>
        </div>
        <div className='dragon'>
        <img className='m-5' src='https://i0.wp.com/pokebank.es/wp-content/uploads/2023/06/648-6485057_logo-dragon-ball-super-tcg-leave-a-comment.png?fit=1352%2C638&ssl=1' height={190} width={360} />
        <Row>
          <CarruselMarca images={dragon} />
        </Row>
        </div>
      </Container>
    </>
  );
}
export default Home;