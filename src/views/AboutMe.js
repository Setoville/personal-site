import React from "react";

const AboutMe = () => {
  return (
    <div style={centerStyle}>
      <div>
        <h1>About Me.</h1>
      </div>
      <div>
        Loren Ipsum
      </div>
    </div >
  )
}
const centerStyle = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}



export default AboutMe;
