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
      <div className>
        <div className="main text-left ml-5">
          Hi, I'm <strong>Corbyn</strong>
          <br />
          <div className="main text-center">
          <span>
            <strong>I am a</strong>
          </span>
          </div>
        </div>
        <div className={classes.sub}>
          <Typewriter
            options={{
              strings: ["Software Engineer", "Student", "Web Developer"],
              autoStart: true,
              loop: true,
              delay: 50
            }}
          />
        </div>
      </div>
    </div>
  </MyTitleMessage>
);

export default TitleMessage;
