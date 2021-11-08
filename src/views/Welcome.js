import React, { useState } from "react";
import Typing from "react-typing-animation";
import { ButtonGroup, Button, Fade } from "react-bootstrap";

const LinkButton = ({ to, children }) => (
  <Button
    variant="outline-dark"
    size="lg"
    href={to}
  >
    {children}
  </Button >
)

const LinkButtons = () =>
  <ButtonGroup>
    <LinkButton to="/resume">
      Resume
    </LinkButton>
    <LinkButton to="https://github.com/setoville">
      Github
    </LinkButton>
    <LinkButton to="https://www.linkedin.com/in/setoville/">
      LinkedIn
    </LinkButton>
  </ButtonGroup >

const Welcome = () => {
  const [doneTyping, setDoneTyping] = useState(false)
  return (
    <>
      <div style={centerStyle}>
        <div style={welcomeTextStyle}>
          <Typing onFinishedTyping={() => setDoneTyping(true)}>
            <h3>Welcome to Setoville!</h3>
          </Typing>
          <LinkButtons />
        </div>
      </div>
      <div style={footerStyle}>
        <Fade in={doneTyping} >
          <div>Read more...</div>
        </Fade>
      </div>
    </>
  )
}

const welcomeTextStyle = { textAlign: 'center' }
const centerStyle = {
  height: '80%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}
const footerStyle = {
  height: '20%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}



export default Welcome;
