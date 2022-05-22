import './App.css';
import Contact from './components/sections/Contact';
import Cover from './components/sections/Cover';
import Header from './components/sections/Header';
import Products from './components/sections/Products';
import Footer from './components/sections/Footer';
function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Cover/>
        <Products/>
        <Contact/>
        <Footer/>        
      </main>
    </>
  );
}

export default App;
