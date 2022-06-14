import React from 'react';
import { Header } from './components';
import { Home, Cart, Glavnaya, Onas } from './pages';
import { Route, Routes } from 'react-router-dom';

function App() {

  const [items, setItems] = React.useState([]);

  React.useState(() => {
    fetch('https://62a87c39ec36bf40bda6fcda.mockapi.io/items')
      .then((res) => res.json())
      .then((arr) => {
        setItems('arr');
      });
  }, []);



  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Glavnaya />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/onas" element={<Onas />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
