import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import VocabLists from './pages/VocabLists'
import Header from './components/Header'
import PhraseByTheme from './pages/PhraseByTheme'

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/themes" element={<VocabLists />} />
          <Route path="/themes/:id" element={<PhraseByTheme />} />
          <Route path="/phrases" element={<VocabLists />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
