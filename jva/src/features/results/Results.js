import React, { useEffect } from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import {
  selectAnimes,
  loadCharacter,
} from './resultsSlice';
import axios from 'axios';
//import styles from './Counter.module.css';

export default function Results() {

    const allAnimes = useSelector(selectAnimes);
    const dispatch = useDispatch();

    //OnMount => Appel à l'API -- à déplacer ultérieurement
    useEffect(() => {
       
      const getAnime= () => {
        let animes = 'rien pour le moment';

        axios.get('https://api.jikan.moe/v3/genre/anime/1/1')
          .then(function (response) {
            animes = response.data.anime
            dispatch(loadCharacter(animes))
          })
          .catch(function (error) {
        // handle error
         console.log(error);
         return animes = 'désolé on a rien trouvé'
          })
        .then(function () {
          return animes
          });

      }
      getAnime();
     // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  let test = 
  <Spinner animation="border" role="status">
  <span className="sr-only">Loading...</span>
 </Spinner>

  
    if(typeof allAnimes !== 'string'){
      test = allAnimes.map(element => {
        return (
            <Card key={element.mal_id} style={{ width: "16rem", padding: '1em', margin: '0.5em' }}>
              <Card.Img variant="top" src={element.image_url} />
              <Card.Body>
                <Card.Title>{element.title}</Card.Title>
                <Card.Text>Type : {element.type}</Card.Text>
                <Card.Text>Episodes : {element.episodes}</Card.Text>
                <Button variant="primary">
                  Voir détails
                </Button>
              </Card.Body>
            </Card>
        );
      });
    } 

  
    return (
      <Container style={{ display: "flex", flexWrap: 'wrap', justifyContent: 'space-evenly', marginTop: '4em'}}>
      {test}
    
      </Container>
    );
}


//TODO onClick={() => dispatch(load())}
