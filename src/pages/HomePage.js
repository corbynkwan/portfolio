import React from 'react';

import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import Particles from "react-particles-js";
import { particlesOptions } from "../particlesOptions";
import TitleMessage from '../components/TitleMessage/TitleMessage'
import Container from 'react-bootstrap/Container';

function HomePage(props) {

    return(
        <div>
                        <Container fluid={true}>

      <Particles
        params={particlesOptions}
      /> 
    
            <TitleMessage></TitleMessage>

            </Container>

        </div>
    );

}

export default HomePage;