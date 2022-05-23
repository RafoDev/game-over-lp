import React from 'react'

const Products = () => {
    return (
        <section className="Productos">
            <h2 className="productos__title">
                Productos
            </h2>
            <section className="productos" id="productos">
                <div className="productos-container">
                    <ul className="productos__button-container">
                        <li className="productos__button current" data-target="all">Todos</li>
                        <li className="productos__button" data-target="monitor">Monitores</li>
                        <li className="productos__button" data-target="laptop">Laptops</li>
                        <li className="productos__button" data-target="procesador">Procesadores</li>
                    </ul>
                    <div className="productos__gallery"></div>
                </div>

            </section>
        </section>
    )
}

export default Products