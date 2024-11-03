import React from 'react'
import Navbar from './components/navar/Navbar'
import Introduction from './components/introduction/Introduction'
import Nina from './components/nina/Nina'
import View from './components/overview/View'
import End from './components/end/End'


function App() {
    return (
        <>
            <Navbar />
            <Introduction />
            <Nina />
            <View />
            <End />
        </>
    );
}

export default App;