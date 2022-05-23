import './App.css';
import Contact from './components/sections/Contact';
import Cover from './components/sections/Cover';
import Header from './components/sections/Header';
import Products from './components/sections/Products';
import Footer from './components/sections/Footer';
import useObserver from './useOberserver';

function App() {

  const [observer, serElements, entries] = useObserver({
    threshold: 1.0,
    root: null
  });

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
