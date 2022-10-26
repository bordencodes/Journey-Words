import './App.css'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import VocabLists from './pages/VocabLists'

const App = () => {
  return (
    <div>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="phrases" element={<VocabLists />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
