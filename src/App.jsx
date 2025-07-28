import { useState } from 'react'
import './styles/main.scss'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <body>
      <header>
      <img className='logo' src="src/assets/logo.png" alt="logo-garden-of-thoughts" />
      </header>
      <section className='box-global'>
        <img className='img-left' src="src/assets/flowers_right.png" alt="flowers-background-with-moth" />
        <img className='img-right' src="src/assets/flowers_left.png" alt="flowers-background" />
       </section>
       <footer>
        <h1>.</h1>
       </footer>
    </body>
    </>
  )
}

export default App
