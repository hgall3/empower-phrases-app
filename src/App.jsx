import { useState } from 'react'
import AddPhraseForm from './components/addPhrase/AddPhraseForm'
import PhraseList from './components/phraseList/PhraseList'
import './styles/main.scss'
import { initialPhrases } from './assets/data/data.js'
import logo from './assets/logoGT.png'
import flowersRight from './assets/flowers_right.png'
import flowersLeft from './assets/flowers_left.png'


//Prueba

function App() {
  const [phrases, setPhrases] = useState(initialPhrases)

  const handleAddPhrase = (newPhrase) => {
    setPhrases(prev => [...prev, newPhrase])
  }

  const handleDeletePhrase = (id) => {
    setPhrases(prev => prev.filter(phrase => phrase.id !== id))
  }

  const handleEditPhrase = (updatedPhrase) => {
    setPhrases(prev =>
      prev.map(phrase => phrase.id === updatedPhrase.id ? updatedPhrase : phrase)
    )
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
          <PhraseList
            phrases={phrases}
            onDeletePhrase={handleDeletePhrase}
            onEditPhrase={handleEditPhrase}
          />
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