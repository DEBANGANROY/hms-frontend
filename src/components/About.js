import {React, useEffect} from 'react'
import "./About.css"
import Aboutus from './aboutcomponents/Aboutus'
import Leaders from './aboutcomponents/Leaders'

function About() {
  useEffect(() => {
    document.title = "About Us";
  }, []);
  return (
    <>
      <Aboutus />
      <br />
      
      <Leaders />
      <div className="px-5">
        <br />
        <br />
      </div>
    </>
  )
}

export default About
