import React from 'react'
import Navbar from './components/navar/Navbar'
import Pagina1 from './components/pagina1/Pagina1'
import Pagina1Tekst from './components/pagina1tekst/Pagina1Tekst'
import Pagina2 from './components/pagina2/Pagina2'
import Pagina2Tekst from './components/pagina2tekst/Pagina2Tekst'
import Nina from './components/nina/Nina'
import Pagina3 from "./components/pagina3/Pagina3"
import View from './components/overview/View'
import End from './components/end/End'
import Test from './components/TekstBlokken/Test'

function App() {
    return (
        <>
            <Navbar />
            <Pagina1 />
            <Pagina1Tekst/>
            <Pagina2 />
            <Pagina1Tekst/>
            <Nina /> 
            <Pagina1Tekst/>
            <Pagina3/>   
            <Pagina1Tekst/>
            <View />
            <Pagina1Tekst/>
            <End />
            <Pagina1Tekst/>
            <Test />
        </>
    );
}

export default App;