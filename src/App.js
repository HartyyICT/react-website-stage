import React from 'react'
import Navbar from './components/navar/Navbar'
import Pagina1 from './components/pagina1/Pagina1'
import Pagina1Tekst from './components/pagina1tekst/Pagina1Tekst'
import Introduction from './components/introduction/Introduction'
import Pagina2Tekst from './components/pagina2tekst/Pagina2Tekst'
import Nina from './components/nina/Nina'
import Struggle from './components/struggle/Struggle'
import View from './components/overview/View'
import End from './components/end/End'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(useGSAP);


function App() {
    return (
        <>
            <Navbar />
            <Pagina1 />
            <Pagina1Tekst/>
            <Introduction />
            <Pagina2Tekst />
            <Nina /> 
            <Pagina2Tekst />
            <Struggle/>   
            <Pagina2Tekst />     
            <View />
            <Pagina2Tekst />
            <End />
        </>
    );
}

export default App;