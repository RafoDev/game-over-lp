import React, { useEffect, useState } from 'react'

const Cart = ({ cartItems, setCartItems, setOpenCart, openCart }) => {
    const handleCloseCart = () => {
        setOpenCart(false);
    }
    const [total, setTotal] = useState(0);
    const removeCartItem = (e, id) => {
        console.log(id);
        const newCartItems = cartItems.filter(ele => ele.id !== id);
        setCartItems(newCartItems);
    }
    useEffect(() => {
        const acum = cartItems.map(item => item.price).reduce((prev, curr) => prev + curr, 0);
        setTotal(acum);
    },[cartItems])

    useEffect(() => {
        const cart = document.getElementById('cart');
        const cartBackground = document.getElementById('cartBackground');
        const cartContainer = document.getElementById('cartContainer');
        if (openCart === true) {
            cart.classList.add('cart--show');
            cartBackground.classList.add('cart-background--show');
            cartContainer.classList.add('cart-container--show');
        } else {
            cart.classList.remove('cart--show');
            cartBackground.classList.remove('cart-background--show');
            cartContainer.classList.remove('cart-container--show');
        }

    }, [openCart])

    return (
        <div className="cart" id='cart'>
            <div
                className="cart-background"
                id='cartBackground'
                onClick={handleCloseCart}
            ></div>

            <div className="cart-container" id="cartContainer">
                <header className="cart__header">
                    <div className="cart__header-container">
                        <h2 className="cart__header-title">Carrito</h2>
                        <i
                            className="cart__header-close fa-solid fa-xmark"
                            onClick={handleCloseCart}
                        ></i>
                    </div>
                </header>
                {
                    cartItems.length ?
                        (<>
                            <section className="cart__items">
                                <div className="cart__items-container">
                                    <ul className="cart__items-list">
                                        {
                                            cartItems.map(item => {
                                                const { id, name, thumbnail, price } = item;
                                                return (
                                                    <li
                                                        key={id}
                                                        className="cart__list-item">
                                                        <div className="cart__list-item-details">
                                                            <img src={thumbnail} alt="" className="cart__list-item-thumbnail" />
                                                            <p className="cart__list-item-name">{name}</p>
                                                        </div>
                                                        <div className="cart__list-item-price">
                                                            <i
                                                                className="fa-solid fa-trash cart__list-remove-item"
                                                                onClick={(e, id) => removeCartItem(e, item.id)}
                                                            ></i>
                                                            <p className="cart__list-item-price-details">1 X {new Intl.NumberFormat('es-PE', { style: 'currency', currency: 'PEN' }).format(price)}</p>
                                                        </div>
                                                    </li>
                                                );
                                            })
                                        }
                                    </ul>
                                </div>
                            </section>
                            <footer className='cart__footer'>
                                <div className="cart__footer-summaries">
                                    <div className="cart__footer-summary">
                                        <p className="cart__footer-summary-text">Subtotal</p>
                                        <p className="cart__footer-summary-price">{total}</p>
                                    </div>
                                    <div className="cart__footer-summary">
                                        <p className="cart__footer-summary-text">Descuento</p>
                                        <p className="cart__footer-summary-price">0</p>
                                    </div>
                                    <div className="cart__footer-summary">
                                        <p className="cart__footer-summary-text">Total</p>
                                        <p className="cart__footer-summary-price">{total}</p>
                                    </div>
                                </div>
                                <div className="cart__footer-buttons">
                                    <a
                                        href="##"
                                        className="cart__footer-buttons-pay"
                                    >
                                        <i className="cart__footer-buttons-pay-icon fa-solid fa-cart-shopping"></i>
                                        <p className='cart__footer-buttons-pay-text'>Comprar</p>

                                    </a>
                                    <a
                                        href="##"
                                        className="cart__footer-buttons-close"
                                        onClick={handleCloseCart}
                                    >
                                        Ir a comprar
                                    </a>

                                </div>
                            </footer>
                        </>) : (
                            <section className="cart__items">
                                <div className="cart__items-container">
                                    <div className="empty-cart">
                                        Tu carrito está vacio!
                                    </div>
                                    <a
                                        href="##"
                                        className="cart__footer-buttons-close"
                                        onClick={handleCloseCart}
                                    >
                                        Ir a comprar
                                    </a>
                                </div>
                            </section>


                        )
                }
            </div>
        </div >
    )
}

export default Cart