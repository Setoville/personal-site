import React from "react";

import Footer from "../components/Footer";
import { centerStyle } from "./Welcome";

const AboutMe = () => {
  return (
    <>
      <div style={{ ...centerStyle, ...bodyStyle }}>
        <div>
          <h1>About Me.</h1>
        </div>
        <div>
          Loren Ipsum
        </div>
      </div >
      <Footer />
    </>
  )
}
const bodyStyle = {
  height: '90%'
}




export default AboutMe;
