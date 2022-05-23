import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Games = ({ addItemtoCard }) => {
    const prices = [35, 25, 75, 100, 125, 225];
    const [games, setGames] = useState([]);
    const [slug, setSlug] = useState('')

    const getGamesFetch = async (url) => {
        try{
            const response = await fetch(url);
            const { results } = await response.json();
            setGames(results);
        }catch(err) {
            alert(err);
        }
    };
    const getGamesAxios = async (url) => {
        try{
            const response = await axios(url);
            const { results } = response.data;
            setGames(results);
        }catch(err){
            alert(err);
        }
    }
    useEffect(() => {
        const url = `${process.env.REACT_APP_URL}?key=${process.env.REACT_APP_API_TOKEN}&search=${slug}`;
        getGamesAxios(url);
    }, [])

    const handleChange = (e) => {
        e.preventDefault();
        setSlug(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const url = `${process.env.REACT_APP_URL}?key=${process.env.REACT_APP_API_TOKEN}&search=${slug}`;
        getGamesAxios(url);
        setSlug('');
    }

    const handleClick = (e, id) => {
        e.preventDefault();
        const item = games.find(p => p.id === id);
        item.price = computePrice(item.name);
        addItemtoCard(item);
    }
    const computePrice = (name) => {
        const priceIdx = name.charCodeAt(name.length - 1) % prices.length;
        return prices[priceIdx];
    }
    return (
        <section className="productos" id='productos'>
            <form
                className="productos__form"
                onSubmit={handleSubmit}>
                <input
                    className="productos__search"
                    type="search"
                    placeholder='Ingrese el producto...'
                    onChange={handleChange}
                    value={slug}
                />
                <button className="productos__button">Buscar</button>
            </form>
            <div className="productos__gallery">
                {games.length ?
                    (
                        games.map(product => {
                            const { id, name, background_image } = product;
                            ;
                            const price = computePrice(name);
                            return (
                                <div key={id} className="productos__producto-container">
                                    <figure className="productos__producto-thumbnail-container">
                                        <img src={background_image} alt={name} className="productos__producto-thumbnail" />
                                    </figure>
                                    <p className="productos__producto-name">{name}</p>
                                    <p className="productos__producto-price">{new Intl.NumberFormat('es-PE', { style: 'currency', currency: 'PEN' }).format(price)}</p>
                                    <a
                                        href="#"
                                        className="productos__producto-buy-button"
                                        onClick={(e) => handleClick(e, id)}
                                    >
                                        <i className="productos__producto-buy-button-icon fa-solid fa-cart-shopping"></i>
                                        <p className='productos__producto-buy-button-text'>Comprar</p>
                                    </a>
                                </div>)
                        })
                    ) : (
                    <>
                        Obteniendo resultados...
                    </>)


                }
            </div>
        </section>
    );
}

export default Games