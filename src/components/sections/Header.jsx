import React from 'react'
// import darkMode from '../header/DarkMode';

const Header = () => {
    const handleToggle = (() => {
        const navToggle = document.getElementById('header-nav__menu-icon-label-close');
        const menuLinkList = document.querySelector('.header-nav__menu-link-list');
        menuLinkList.classList.toggle('header-nav__menu-link-list-show');
        navToggle.classList.toggle('header-nav__menu-icon-label-close-show');
    });

    const handleSwitchToggle = (() => {
        const btnSwitch = document.getElementById('header-nav__menu-switch');
        document.body.classList.toggle('body-dark');
        btnSwitch.classList.toggle('active');

        if (document.body.classList.contains('body-dark')) {
            localStorage.setItem('dark-mode', 'true');
        } else {
            localStorage.setItem('dark-mode', 'false');
        }
    });

    return (
        <header className="header">
            <div className="header-container">
                <nav className="header-nav">
                    <article className="header-nav__logo-container">
                        <img src="https://i.postimg.cc/fTBMvbKv/icon.png" alt="Logo de PCManía" className="header-nav__logo" />
                        <h1 className="header-nav__title">
                            PCMANÍA
                        </h1>
                    </article>
                    <div id="header-nav__menu-icon-label" className="header-nav__menu-icon-label">
                        <i className="bi bi-list"></i>
                    </div>
                    <div id="header-nav__menu-icon-label-close" className="header-nav__menu-icon-label-close"
                        onClick={handleToggle}>
                        <i className="bi bi-x-lg"></i>
                    </div>
                    <ul className="header-nav__menu-link-list">
                        <li className="header-nav__list-item">
                            <a href="#" className="header-nav__link">Inicio</a>
                        </li>
                        <li className="header-nav__list-item">
                            <a href="" className="header-nav__link">Productos</a>
                        </li>
                        <li className="header-nav__list-item">
                            <a href="" className="header-nav__link">Contacto</a>
                        </li>
                        <li>
                            <button className="header-nav__menu-switch" id="header-nav__menu-switch"
                            onClick={handleSwitchToggle}
                            >
                                <span className="header-nav__menu-switch-label"><i className="bi bi-emoji-sunglasses"></i></span>
                                <span className="header-nav__menu-switch-label"><i className="bi bi-moon-stars-fill"></i></span>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header