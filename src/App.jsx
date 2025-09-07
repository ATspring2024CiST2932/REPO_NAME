import Contact from './components/Contact.jsx'
import FeaturedLinks from './components/FeaturedLinks.jsx'
import Footer from './components/Footer.jsx'
import Gallery from './components/Gallery.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import ProductsServices from './components/ProductsServices.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <FeaturedLinks />
        <ProductsServices />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
