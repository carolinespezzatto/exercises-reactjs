import React from 'react'
import './App.css'
import Head from './components/Head'
import Products from './components/Products'
import Total from './components/Total'
import Button from './components/Button'


const importInfo = () => {
  return (
    <div className='container'>
      <h1>Invoice</h1>
      <Head/>
      <Products/>
      <Total/>
      <Button/>
    </div>
    )
}

export default importInfo