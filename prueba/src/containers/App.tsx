import React, { useEffect, useState } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Products from '../components/products';
import { FakeStore, Data, Rating } from '../interfaces/fakestore.interface';
import { getFakestore } from '../services/fakestore.service';
import { get } from 'http';

export const App = () => {
  // Declaramos los estados.
  const [productos, setProductos] = useState<Data[]>([])

  const getDataAsync = async () => {
    getFakestore()
      .then((response) => {
        const data = response.data as Data[]
        setProductos(data)
        console.log(data.map((product) => product.title))
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
        
        <button onClick={getDataAsync}>Obtener Productos</button>
        <Products data={productos} />
      </header>
    </div>
  );
}