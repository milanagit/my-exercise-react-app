// src/components/Header.jsx

import React from 'react';

// Ovo je funkcionalna komponenta
const Header = (props) => {
    // Opcionalno: Destrukturiranje props-a za laksu upotrebu
    const { title, navItems } = props;

    return (
        <header className='main-header'>

            {/* Prikaz naslova/brenda. Koristi props.title ako je definisan, inače koristi podrazumevanu vrednost */}
            <h1>{title || "Moj React Projekat"}</h1>

            {/* Navigacija */}
            <nav>
                <ul>
                {/* Provera da li postoje navigacioni elementi pre mapiranja */}
                {navItems && navItems.map((item, index) => (
                    <li key={index}>
                    <a href={item.url}>{item.text}</a>
                    </li>
                ))}
                </ul>
            </nav>

        </header>
    );
};

// Obavezno izvezite komponentu da bi mogla da se koristi u drugim fajlovima
export default Header;