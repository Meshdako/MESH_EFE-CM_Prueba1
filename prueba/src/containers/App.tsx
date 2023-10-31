import React, { useEffect, useState } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Products from '../components/products';
import { FakeStore, Data, Rating } from '../interfaces/fakestore.interface';
import { getFakestore } from '../services/fakestore.service';

export const App = () => {
  // Declaramos los estados.
  const [products, setProducts] = useState([])

  const getDataAsync = async () => {
    getFakestore()
      .then((response) => {
        const data  = response.data as Data

        console.log(data)
      })
      .catch((error) => {
        console.log(error)
      })
    console.log("Productos!")
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <button onClick={getDataAsync}>Get Products</button>
      </header>
    </div>
  );
}