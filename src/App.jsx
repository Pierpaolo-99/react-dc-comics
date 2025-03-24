import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Comics from './data/comics'
import Menu from './data/menu'

function App() {

  return (
    <>
      <Header Menu={Menu} />
      <Main comics={Comics} />
      <Footer />
    </>
  )
}

export default App
