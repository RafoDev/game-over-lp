import Header from './components/sections/Header';
import Footer from './components/sections/Footer';
import { useEffect, useState } from 'react';
import Cart from './components/Cart';
import Games from './components/sections/Games';

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
        <Games
        addItemtoCard={addItemtoCard}
        />
        <Footer />
      </main>
    </>
  );
}

export default App;
