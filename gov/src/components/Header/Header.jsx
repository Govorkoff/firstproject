import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return <header className={s.header}>
        <img src="https://a.deviantart.net/avatars/j/a/jack070.png?7" className={s.logo}></img>
    </header>
}

export default Header