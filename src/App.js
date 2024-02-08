import React from 'react'
import Create from './Components/Create'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Readdata from './Components/Readdata'
import Edit from './Components/Edit'
import "./App.css"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
           <Route exact path='/' element={<Create/>}> </Route>
           <Route exact path='/readdata' element={<Readdata/>}> </Route>
           <Route exact path='/edit' element={<Edit/>}> </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
