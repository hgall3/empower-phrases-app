import { useState } from 'react'
import AddPhraseForm from './components/addPhrase/AddPhraseForm'
import PhraseList from './components/phraseList/PhraseList'
import Edit from './components/editPhrase/EditPhrase.jsx'
import './styles/main.scss'

import logo from './assets/logo.png'
import flowersRight from './assets/flowers_right.png'
import flowersLeft from './assets/flowers_left.png'

// Si tienes frases iniciales, defínelas aquí
const initialPhrases = [
  { id: 1, text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
  { id: 2, text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
]

function App() {
  const [phrases, setPhrases] = useState(initialPhrases)

  const handleAddPhrase = (newPhrase) => {
    setPhrases(prev => [...prev, newPhrase])
  }

  return (
    <div className="app-wrapper">
      <header>
        <img className="logo" src={logo} alt="logo garden of thoughts" />
      </header>

      <main className="box-global">
        <img className="img-left" src={flowersRight} alt="flowers background with moth" />

        <div className="phrases-container">
          <AddPhraseForm onAdd={handleAddPhrase} />
          <Edit phrases={phrases} setPhrases={setPhrases} />
        </div>

        <img className="img-right" src={flowersLeft} alt="flowers background" />
      </main>

      <footer>
        <h1>.</h1>
      </footer>
    </div>
  )
}

export default App