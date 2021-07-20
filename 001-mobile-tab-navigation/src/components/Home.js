import React from 'react'
import { HOME } from './constants'

export const Home = () => {

  const values = Object.keys(HOME)

  const renderHome = (index) => {
    return (
      <div key={index}>
        <img src={HOME.img01} alt=""></img>
      </div>
    )   
  }

  return (
    <div>
      {values.map(renderHome)}
    </div>
  )
}

export default Home