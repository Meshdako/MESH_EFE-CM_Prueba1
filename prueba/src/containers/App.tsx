import React, { useEffect, useState } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Products from '../components/products';
import { FakeStore, Data, Rating } from '../interfaces/fakestore.interface';
import { getFakestore } from '../services/fakestore.service';
import { Loading } from '../components/loding';

export const App = () => {
  // Declaramos los estados.
  const [productos, setProductos] = useState<Data[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const getDataAsync = async () => {
    setLoading(true)
    getFakestore()
      .then((response) => {
        const data = response.data as Data[]
        setProductos(data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
      })

    await new Promise((resolve) => setTimeout(resolve, 7000));
    
    console.log("Productos!")
    setLoading(false)
  }

  return (
    <div className="App">
      {
        loading ? <Loading /> : (
          <header className="App-header">   
          <br />         
            <button onClick={getDataAsync}>Obtener Productos</button>
            <Products data={productos} />
          </header>
        )
      }
    </div>
  );
}