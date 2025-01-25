// App.js
import React, { useState } from 'react';
import Navbar from './components/navar/Navbar';
import Pagina1 from './components/pagina1/Pagina1';
import Pagina1Tekst from './components/pagina1tekst/Pagina1Tekst';
import Pagina2 from './components/pagina2/Pagina2';
import Pagina2Tekst from './components/pagina2tekst/Pagina2Tekst';
import Pagina3 from './components/pagina3/Pagina3';
import Pagina4 from './components/pagina4/Pagina4';
import Pagina5 from './components/pagina5/Pagina5';
import Pagina6 from './components/pagina6/Pagina6';
import Pagina7 from './components/pagina7/Pagina7';
import Pagina8 from './components/pagina8/Pagina8';
import Pagina9 from './components/pagina9/Pagina9';
import Pagina10 from './components/pagina10/Pagina10';
import Pagina11 from './components/pagina11/Pagina11';

function App() {
    const [isReversed, setIsReversed] = useState(false);

    const toggleOrder = () => {
        setIsReversed(!isReversed);
    };

    // Add Pagina1Tekst between every page
    const pages = [
        <Pagina1 key="1" />, <Pagina1Tekst key="1.5" />,
        <Pagina2 key="2" />, <Pagina1Tekst key="2.5" />,
        <Pagina3 key="3" />, <Pagina1Tekst key="3.5" />,
        <Pagina4 key="4" />, <Pagina1Tekst key="4.5" />,
        <Pagina5 key="5" />, <Pagina1Tekst key="5.5" />,
        <Pagina6 key="6" />, <Pagina1Tekst key="6.5" />,
        <Pagina7 key="7" />, <Pagina1Tekst key="7.5" />,
        <Pagina8 key="8" />, <Pagina1Tekst key="8.5" />,
        <Pagina9 key="9" />, <Pagina1Tekst key="9.5" />,
        <Pagina10 key="10" />, <Pagina1Tekst key="10.5" />,
        <Pagina11 key="11" />
    ];

    return (
        <>
            <Navbar onToggleOrder={toggleOrder} />
            {isReversed ? [...pages].reverse() : pages}
        </>
    );
}

export default App;
