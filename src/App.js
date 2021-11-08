import React from 'react'
import './App.scss'
// import Background from './components/Background'
import { Routes, Route } from 'react-router-dom'
// import { Route, Routes } from 'react-router-dom'
import Main from './components/Main'
import BoardGame from './components/BoardGame'
// import { Button } from '@mui/material'
const App = () =>{
    return (
        <div className='App main-background'>
            <Routes>
                <Route path="/" element={<Main />}/>
                <Route path="/start" element={<BoardGame />}/>
                {/* <Background /> */}
            </Routes>
        </div>
    )
}



export default App

