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
import "./AboutPage.css";

function AboutPage(props) {

    return (
        <React.Fragment>
        <Hero title={props.title} />

          <div className = "aboutContainer " >
              <Row xl >
                <Col xs sm lg md xl = {3} >
                  <Row   className="justify-content-center mb-2 mr-2 ">
                    <Image className="profile justify-content-end " alt="profile" src={Profile} thumbnail fluid />
                  </Row>
                </Col>
                <Col className="row-eq-height"  >
                  <Row className="my-details rounded " >
                  <h3 className="ml-2 desc">
                    Hi there! I'm, Corbyn, A Software Engineer from Vancouver, Canada
                    <br/>
                    <br/>
                    <br />I'm currently a 3rd Year student at the University of British Columbia specializing in Computer Science.
                    <br/>
                    <br/>
                    In my free time, I enjoy immersing myself as a Full Stack Web Developer with React.js, Redux, Express.js, Node.js, and PostgreSQL as my tech stack.
                    <br />
                    <br />

                    Furthermore, as a teaching assistant in foundational programming courses, I am experienced in software design, design patterns, and good coding practices.
                    <br />
                    <br />I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
                    <br /> <br />
                    </h3>
                    <Col className="d-flex justify-content-center flex-wrap">
                      <div>
                        <a href="./contact">
                          <Button className="m-2" variant="outline-primary">
                            Let's talk
                          </Button>
                        </a>
                      </div>
                      <div>
                        <a href={resumePdf} target="_blank" >
                          <Button className="m-2" variant="outline-success">
                            My Resume
                          </Button>
                        </a>
                      </div>
                      <div>
                        <a href="https://github.com/corbynkwan" target="_blank" rel="noopener noreferrer">
                          <Button className="m-2" variant="outline-dark">
                            GitHub
                          </Button>
                        </a>
                      </div>
                      <div>
                        <a href="https://linkedin.com/in/corbyn-kwan" target="_blank" rel="noopener noreferrer">
                          <Button className="m-2" variant="outline-info">
                            LinkedIn
                          </Button>
                        </a>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
            </React.Fragment>
      );

}

export default AboutPage;