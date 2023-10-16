import React, { useState } from 'react';
// import styles from './Header.module.css';



const Header = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <header style={{fontWeight: 'bold', textAlign: 'center', backgroundColor: '#111'}}>
            <h1 style={{fontSize: '28px'}}>BEGUIDE</h1>
        </header>
    );
};

export default Header;
