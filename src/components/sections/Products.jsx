import React from 'react'

const Products = ({addItemtoCard}) => {

    const productsArr = [
        { id: 1, name: 'juego1', thumbnail:'https://storegamesperu.com/files/images/thumbs/productos_300x400_1629596410-elden-ring-ps4-pre-orden.jpg', price:30},
        { id: 2, name: 'juego2', thumbnail:'https://storegamesperu.com/files/images/thumbs/productos_300x400_1622484991-resident-evil-village-ps4.jpg', price:70},
        { id: 3, name: 'juego3', thumbnail:'https://storegamesperu.com/files/images/thumbs/productos_300x400_1629828447-marvels-spider-man-game-of-the-year-edition-ps4.jpg', price:30},
        { id: 4, name: 'juego4', thumbnail:'https://storegamesperu.com/files/images/thumbs/productos_300x400_1626113517-fifa-22-ps4-pre-orden.jpg', price:50},
        { id: 5, name: 'juego5', thumbnail:'https://storegamesperu.com/files/images/thumbs/productos_300x400_1605819293-mortal-kombat-11-ultimate-ps4.jpg', price:70}
    ];

    const handleClick = (e,id) => {
        e.preventDefault();
        const item = productsArr.find(p => p.id === id);
        addItemtoCard(item);
    }

    return (
        <section className="Productos">
            <h2 className="productos__title">
                Productos
            </h2>
            <section className="productos" id="productos">
                <div className="productos-container">
                    {/* <ul className="productos__button-container">
                        <li className="productos__button current" data-target="all">Todos</li>
                        <li className="productos__button" data-target="monitor">Monitores</li>
                        <li className="productos__button" data-target="laptop">Laptops</li>
                        <li className="productos__button" data-target="procesador">Procesadores</li>
                    </ul> */}
                    <div className="productos__gallery">
                            {
                                productsArr.map(product => { 
                                    const {id,name,thumbnail,price} = product;
                                    return (
                                        <div key={id} className="productos__producto-container">
                                            <figure className="productos__producto-thumbnail-container">
                                                <img src={thumbnail} alt={name} className="productos__producto-thumbnail" />
                                            </figure>   
                                            <p className="productos__producto-price">{new Intl.NumberFormat('es-PE', { style: 'currency', currency: 'PEN' }).format(price)}</p>
                                            <div 
                                            className="productos__producto-buy-button"
                                            onClick={(e)=>handleClick(e, id)}
                                            >
                                                <i className="productos__producto-buy-button-icon fa-solid fa-cart-shopping"></i> 
                                                <p className='productos__producto-buy-button-text'>Comprar</p>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                    </div>
                </div>

            </section>
        </section>
    )
}

export default Products