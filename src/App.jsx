import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Comics from './data/comics'

function App() {

  return (
    <>
      <Header />
      <Main comics={Comics} />
      <Footer />
    </>
  )
}

export default App
