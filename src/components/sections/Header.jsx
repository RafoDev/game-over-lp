import React from 'react'
import Cart from '../Cart';

const Header = ({ cartItems, setOpenCart }) => {
    const navToggle = document?.getElementById('header-nav__menu-icon-label-close');
    const handleToggle = (() => {
        const menuLinkList = document?.querySelector('.header-nav__menu-link-list');
        menuLinkList?.classList.toggle('header-nav__menu-link-list-show');
        navToggle?.classList.toggle('header-nav__menu-icon-label-close-show');
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
                            <img src="https://i.postimg.cc/fTBMvbKv/icon.png" alt="Logo de PCManía" className="header-nav__logo-img" />
                            <h1 className="header-nav__logo-title">
                                PCMANÍA
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
                        <i className="bi bi-list"></i>
                    </div>
                    <div id="header-nav__menu-icon-label-close" className="header-nav__menu-icon-label-close"
                        onClick={handleToggle}>
                        <i className="bi bi-x-lg"></i>
                    </div>
                    <ul className="header-nav__menu-link-list">
                        <li className="header-nav__list-item">
                            <a href="" className="header-nav__link">Inicio</a>
                        </li>
                        <li className="header-nav__list-item">
                            <a href="" className="header-nav__link">Productos</a>
                        </li>
                        <li className="header-nav__list-item">
                            <a href="" className="header-nav__link">Contacto</a>
                        </li>
                        <li>
                            <button className="header-nav__menu-switch" id="header-nav__menu-switch">
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