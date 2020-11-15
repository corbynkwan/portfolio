import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";
import classes from './TitleMessage.css'
const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: -125px;
  text-align: center;

  strong {
    font-size: 1.25em;
  }
  .red { 
    color:#DC143C;
    font-weight: bolder;
  }
  div {
    color: ${props => props.theme.textColor};

    font-weight: 100;
    letter-spacing: 7px;

    .main {
      font-size: 50px;
    }

    .sub {
      font-size: 27px;
      letter-spacing: 2px;
    }
  }
`;

const TitleMessage = () => (
  <MyTitleMessage>
    <div >
      <div>
        <div className="main text-left ml-5">
          Hi, I'm <strong className = "red">Corbyn</strong>
          <br />
          <div className="main text-center">
          <span>
            I am a
          </span>
          </div>
        </div>
        <strong >
          <Typewriter 
            options={{
              strings: ["Looking for a Summer 2021 Internship","Software Engineer", "Student", "Web Developer"],
              autoStart: true,
              wrapperClassName:"red",
              loop: true,
              delay: 50
            }}
          />
        </strong>
      </div>
    </div>
  </MyTitleMessage>
);

export default TitleMessage;
