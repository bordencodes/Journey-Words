import './App.css'
// import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import VocabLists from './pages/VocabLists'
import Header from './components/Header'
import PhraseByTheme from './pages/PhraseByTheme'
// import ViewCollections from './pages/ViewCollections'

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/themes" element={<VocabLists />} />
          <Route path="/themes/:id" element={<PhraseByTheme />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
