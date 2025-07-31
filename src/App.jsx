import { useState } from 'react'
import './styles/main.scss'
import PhraseList from './components/PhraseList'
import AddPhraseForm from './components/AddPhraseForm.jsx'
import { initialPhrases } from './assets/data/data.js'



function App() {
  const [phrases, setPhrases] = useState(initialPhrases)

  const handleAddPhrase = (newPhrase) => {
    setPhrases(prev => [...prev, newPhrase]);
  };

  return (
    <>
     <div className='app-wrapper'>
      <header>
      <img className='logo' src="src/assets/logo.png" alt="logo-garden-of-thoughts" />
      </header>
      <main className='box-global'>
        <img className='img-left' src="src/assets/flowers_right.png" alt="flowers-background-with-moth" />
        <div className="phrases-container">
          <AddPhraseForm onAdd={handleAddPhrase} />
          <PhraseList phrases={phrases} />
        </div>
        <img className='img-right' src="src/assets/flowers_left.png" alt="flowers-background" />
       </main>
       <footer>
        <h1>.</h1>
       </footer>
    </div>
    </>
  )
}



export default App;
