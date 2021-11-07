import React from "react";

const Welcome = () => {
  return (
    <div style={centerStyle}>
      <h1>Welcome to Setoville!</h1>
    </div >
  )
}
const centerStyle = {
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}



export default Welcome;
