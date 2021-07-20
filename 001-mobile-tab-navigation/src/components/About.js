import React from 'react'
import { ABOUT } from './constants'

export const About = () => {

    const values = Object.keys(ABOUT)
  
    const renderAbout = (index) => {
      return (
        <div key={index}>
          <img src={ABOUT.img04} alt=""></img>
        </div>
      )   
    }
  
    return (
      <div>
        {values.map(renderAbout)}
      </div>
    )
  }

export default About