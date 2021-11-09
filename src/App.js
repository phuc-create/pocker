import React from 'react'
import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Main from './components/Main'
import BoardGame from './components/BoardGame'
const App = () =>{
    return (
        <div className='App'>
            <div className='main-background'> </div>
            <Routes>
                <Route path="/" element={<Main />}/>
                <Route path="/start" element={<BoardGame />}/>
            </Routes>
           
        </div>
    )
}



export default App

