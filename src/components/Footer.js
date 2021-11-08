import React, { useState } from "react";
import { ArrowDown } from "react-bootstrap-icons";


const Footer = () => {
  //for some reason, we don't have an onHover()...
  const [hover, setHover] = useState(false)

  const footerStyle = {
    height: '10%',
    backgroundColor: hover ? 'grey' : 'white',
    transition: 'background-color 0.5s'
  }

  return (
    <div
      style={{ ...centerStyle, ...footerStyle }}
      //again, for some reason, we don't have an onHover()..
      onMouseEnter={() => { setHover(true) }}
      onMouseLeave={() => { setHover(false) }}
      onClick={() => { console.log('Click') }}>
      <ArrowDown />
    </div>
  )
}

const centerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}


export default Footer;
