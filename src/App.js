import React from 'react';
import './App.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import NavBar from './Navbar';
import MainSection from './sections/main';
import Secondary from './sections/secondary.js';
import Support from './sections/support';
import Footer from './sections/footer';
import Media from './sections/media'

library.add(fab)

const App = () => {

return (
  <>    
    <NavBar />
    <MainSection/>
    <Secondary/>
    <Support/>
    <Footer/>
    <Media/>
  </>
)

}


export default App