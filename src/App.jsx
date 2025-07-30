import { useState } from 'react'
import './styles/main.scss'
import PhraseList from './components/PhraseList'
import { initialPhrases } from './assets/data/data.js'


function App() {
  const [phrases, setPhrases] = useState(initialPhrases)

  return (
    <>
     <div>
      <header>
      <img className='logo' src="src/assets/logo.png" alt="logo-garden-of-thoughts" />
      </header>
      <section className='box-global'>
        <img className='img-left' src="src/assets/flowers_right.png" alt="flowers-background-with-moth" />
        <div className="phrases-container">
          <PhraseList phrases={phrases} />
        </div>
        <img className='img-right' src="src/assets/flowers_left.png" alt="flowers-background" />
       </section>
       <footer>
        <h1>.</h1>
       </footer>
    </div>
    </>
  )
}

export default App
