import React from 'react'
import './App.css'
import Arrival from './components/Arrival'
import Departure from './components/Departure'
import Room from './components/Room'
import Button from './components/Button'


const importInfo = () => {

    return (
    <div className='container'>
        <div className='data'>
            <h1>Floside Pop Hotel</h1>
            <Arrival/>
            <Departure/>
            <Room/>
            <Button/>
        </div>
            <div className='back--image'></div>
    </div>
    )
}

export default importInfo