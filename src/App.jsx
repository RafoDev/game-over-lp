import './App.css';
import Contact from './components/sections/Contact';
import Cover from './components/sections/Cover';
import Header from './components/sections/Header';
import Products from './components/sections/Products';
import Footer from './components/sections/Footer';
import { useEffect, useState } from 'react';
import Cart from './components/Cart';

function App() {
  const [cartItems, setCartItems] = useState([]);

  
  const cart = JSON.parse(localStorage.getItem('cart'));
  useEffect(() => {
    if (cart==null) {
      setCartItems([]);
    }else{
      setCartItems(cart);
    }
  }, [])

  useEffect(() => {
  }, [cartItems]);
  
  const [openCart, setOpenCart] = useState(false);
  const addItemtoCard = item => {
    const itemExistsInCart = cartItems.find(ele => ele.id === item.id);
    if (itemExistsInCart !== undefined) {
      alert('Ya está en tu carrito! 🤗');
    } else {
      setCartItems([...cartItems, item]);
      localStorage.setItem('cart', JSON.stringify([...cartItems,item]));
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
