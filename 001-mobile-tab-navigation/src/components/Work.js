import React from 'react'
import { WORK } from './constants'

export const Work = () => {

    const values = Object.keys(WORK)
  
    const renderWork = (index) => {
      return (
        <div key={index}>
          <img src={WORK.img02} alt=""></img>
        </div>
      )   
    }
  
    return (
      <div>
        {values.map(renderWork)}
      </div>
    )
  }

export default Work