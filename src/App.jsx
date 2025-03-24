import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Comics from './data/comics'
import Menu from './data/menu'
import footerLinks from './data/footerLinks'
const DCcomics = footerLinks.DCcomics
const shop = footerLinks.shop
const DC = footerLinks.DC
const sites = footerLinks.sites

function App() {

  return (
    <>
      <Header Menu={Menu} />
      <Main comics={Comics} />
      <Footer DCcomics={DCcomics} shop={shop} DC={DC} sites={sites} />
    </>
  )
}

export default App
