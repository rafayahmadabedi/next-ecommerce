import '../styles/globals.css'
import Layout from '../components/layout'
import NavBar from '../components/navBar'
import Footer from '../components/footer'
import CartContextProvider from '../context/cartContext'

function MyApp({ Component, pageProps }) {
  return (
    <content>
      <CartContextProvider>
        <NavBar />
          <Component {...pageProps} />
        <Footer />
      </CartContextProvider>
    </content>
  )
}

export default MyApp
