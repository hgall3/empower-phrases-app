import { useState } from 'react'
import AddPhraseForm from './components/addPhrase/AddPhraseForm'
import PhraseList from './components/phraseList/PhraseList'
import './styles/main.scss'
import { initialPhrases } from './assets/data/data.js'
import logo from './assets/logoGT2.svg'
import flowersRight from './assets/flowers_right.png'
import flowersLeft from './assets/flowers_no_moth.png'
import instagram from "./assets/instagram.svg"
import tiktok from "./assets/tiktok.svg"
import tw from "./assets/twitter.svg"
import Animation from './components/addAnimation/Animation'
import Moth from './components/addAnimation/Moth'
import Bees from './components/addAnimation/bees' 

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
        <div className='welcome'>
        <h1> Welcome To Garden Of Thoughts!</h1>
        <p className='welcometext'> Take a moment to explore inspiring quotes, edit your favorites, <br /> or add your own words of wisdom. <br />Let your thoughts bloom here!</p>
      </div>
      <button className='buttonheader'></button>  
      </header>

      <main className="box-global">
        <Bees /> 
        <img className="img-left" src={flowersRight} alt="flowers background with moth" />

        <div className="phrases-container">
          <AddPhraseForm onAdd={handleAddPhrase} />
          <PhraseList
            phrases={phrases}
            onDeletePhrase={handleDeletePhrase}
            onEditPhrase={handleEditPhrase}
          />
        </div>

        <Animation />
        <Moth />

        <img className="img-right" src={flowersLeft} alt="flowers background" />
      </main>

      <footer>
        <div className="socials">
          <img className='ig' src={instagram} alt="instagram" />
          <img className='tik' src={tiktok} alt="tiktok" />
          <img className='tw' src={tw} alt="x" />
        </div>
      </footer>
    </div>
  )
}

export default App
