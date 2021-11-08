import React, { useState } from "react";
import Typing from "react-typing-animation";
import { ButtonGroup, Button, Fade } from "react-bootstrap";
import Footer from "../components/Footer"

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
      <div style={{ ...centerStyle, ...bodyStyle }}>
        <div style={welcomeTextStyle}>
          <Typing onFinishedTyping={() => setDoneTyping(true)}>
            <h3>Welcome to Setoville!</h3>
          </Typing>
          <LinkButtons />
        </div>
      </div>
      <div style={centerStyle}>
        <Fade in={doneTyping} >
          <div>Read more...</div>
        </Fade>
      </div>
      <Footer />
    </>
  )
}

const welcomeTextStyle = { textAlign: 'center' }

const centerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}

const bodyStyle = {
  height: '90%'
}

export default Welcome;
