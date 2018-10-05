import React from 'react';
import FadeIn from '../transitions/fade';

const Header = () => { return(
    <header className="App-header">
        <FadeIn in={true} duration={600} length={'50px'} direction={'bottom'} >
            <h1>Ernielove</h1>
        </FadeIn>
    </header>
)};

export default Header;