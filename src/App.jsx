import { useState } from 'react'
import './styles/main.scss'
import PhraseList from './components/phraseList/PhraseList'
import AddPhraseForm from './components/addPhrase/AddPhraseForm.jsx'
import { initialPhrases } from './assets/data/data.js'



function App() {
  const [phrases, setPhrases] = useState(initialPhrases)

  const handleAddPhrase = (newPhrase) => {
    setPhrases(prev => [...prev, newPhrase]);
  };
const handleDeletePhrase = (id) => {
  setPhrases((prevPhrases) =>
    prevPhrases.filter((phrase) => phrase.id !== id)
  );
};

  return (
    <>
     <div className='app-wrapper'>
      <header>
      <img className='logo' src="src/assets/logoGT.png" alt="logo garden of thoughts" />
      <div className='welcome'>
        <h1> Welcome To The Garden Of Thoughts!</h1>
        <p className='welcometext'> Take a moment to explore inspiring quotes, edit your favorties, or add your own words of wisdom. <br />let your thoughts bloom here!</p>
      </div>
      <button> Add New Phrase</button>
      </header>
      <main className='box-global'>
        <img className='img-left' src="src/assets/flowers_right.png" alt="flowers background with moth" />
        <div className="phrases-container">
          <AddPhraseForm onAdd={handleAddPhrase} />
          <PhraseList phrases={phrases} onDeletePhrase={handleDeletePhrase}/>
        </div>
        <img className='img-right' src="src/assets/flowers_left.png" alt="flowers background" />
       </main>
       <footer>
        <div className="socials">
          <img className='ig' src="src/assets/instagram.svg" alt="instragram" />
          <img className='tik'src="src/assets/tiktok.svg" alt="tiktok" />
          <img className='tw'src="src/assets/twitter.svg" alt="x" />
        </div>
       </footer>
    </div>
    </>
  )
}



export default App;
