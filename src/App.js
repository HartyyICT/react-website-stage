import React from 'react'
import Navbar from './components/navar/Navbar'
import Introduction from './components/introduction/Introduction'
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
            <Introduction />
            <Nina /> 
            <Struggle/>        
            <View />
            <End />
        </>
    );
}

export default App;