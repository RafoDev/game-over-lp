import React from 'react'

const Header = ({ cartItems, setOpenCart }) => {
    const navToggle = document?.getElementById('header-nav__menu-icon-label-close');
    const handleToggle = (() => {
        const menuLinkList = document?.querySelector('.header-nav__menu-link-list');
        menuLinkList?.classList.toggle('header-nav__menu-link-list-show');
        navToggle?.classList.toggle('header-nav__menu-icon-label-close-show');
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

    const handleOpenCard = () => {
        setOpenCart(true);
    }


    return (
        <header className="header">
            <div className="header-container">
                <nav className="header-nav">
                    <article className="header-nav__logo-container">
                        <div className="header-nav__logo">
                            <img src="https://i.postimg.cc/yN3PG97R/394127.png" alt="Logo de PCManía" className="header-nav__logo-img" />
                            <h1 className="header-nav__logo-title">
                                Game Over
                            </h1>
                        </div>
                        <div 
                        className="header-nav__cart-container"
                        onClick={handleOpenCard}
                        >
                            <i className="fa-solid fa-cart-shopping"></i>
                            {cartItems.length ?
                                (<p className="header-nav__cart-items-counter">{cartItems.length}</p>) :
                                (<></>)
                            }
                        </div>
                    </article>
                    <div id="header-nav__menu-icon-label" className="header-nav__menu-icon-label">
                        <i class="fa-solid fa-bars"></i>
                    </div>
                    <div id="header-nav__menu-icon-label-close" className="header-nav__menu-icon-label-close"
                        onClick={handleToggle}>
                        <i className="fa-solid fa-xmark"></i>
                    </div>
                    <ul className="header-nav__menu-link-list">
                        <li className="header-nav__list-item">
                            <a href="#productos" className="header-nav__link">Inicio</a>
                        </li>
                        <li className="header-nav__list-item">
                            <a href="#productos" className="header-nav__link">Productos</a>
                        </li>
                        <li className="header-nav__list-item">
                            <a href="#contacto" className="header-nav__link">Contacto</a>
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