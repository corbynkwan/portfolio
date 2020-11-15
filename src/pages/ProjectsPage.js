import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Profile from "../assets/images/pic.jpeg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import resumePdf from "../assets/CorbynKwanResume.pdf"
import Projects from "../components/Projects/Projects";

import "./ProjectsPage.css";

function AboutPage(props) {

    return (
        <React.Fragment>
        <Hero title={props.title} />

          <div className = "projectsContainer " >
              <Projects></Projects>
            </div>
            </React.Fragment>
      );

}

export default AboutPage;