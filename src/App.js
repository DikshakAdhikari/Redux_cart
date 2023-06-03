import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Cart } from './components/Cart';
import { Home } from './components/Home';
import store from './reducer/Store';
import { Provider } from 'react-redux';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Provider store= {store}>
      <Navbar />
      <Routes>
      <Route path='/' Component={Home} />
      <Route path='/cart' Component={Cart} />
      </Routes>
      </Provider>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
