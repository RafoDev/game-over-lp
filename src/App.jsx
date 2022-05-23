import './App.css';
import Contact from './components/sections/Contact';
import Cover from './components/sections/Cover';
import Header from './components/sections/Header';
import Products from './components/sections/Products';
import Footer from './components/sections/Footer';
import { useState } from 'react';
import Cart from './components/Cart';

function App() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'juego1', thumbnail: 'https://storegamesperu.com/files/images/thumbs/productos_300x400_1629596410-elden-ring-ps4-pre-orden.jpg', price: 30 }
  ]);
  const [openCart, setOpenCart] = useState(false);

  const addItemtoCard = item => {
    const itemExistsInCart = cartItems.find(ele => ele.id === item.id);
    console.log(cartItems);
    console.log(item);
    console.log(itemExistsInCart);
    if (itemExistsInCart!==undefined) {
      alert('Ya está en tu carrito! 🤗');
    } else {
      setCartItems([...cartItems, item]);
      console.log('Se añadió un nuevo item');
    }
  }
  return (
    <>
      <Header
        cartItems={cartItems}
        setOpenCart={setOpenCart}
      />
      <Cart
        cartItems={cartItems}
        setCartItems={setCartItems}
        setOpenCart={setOpenCart}
        openCart={openCart}
      />
      <main className="main">
        <Cover />
        <Products
          addItemtoCard={addItemtoCard}
        />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
