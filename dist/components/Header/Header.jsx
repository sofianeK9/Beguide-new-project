import React, { useState } from 'react';

const Header = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <header>
            <h1>BEGUIDE</h1>
        </header>
    );
};

export default Header;
