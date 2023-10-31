import React, { useEffect, useState } from 'react';
import { getFakestore } from "../services/fakestore.service";
import { FakeStore, Data, Rating } from "../interfaces/fakestore.interface"

interface Iprops {
    data: Data[]
}

function Products({ data }: Iprops) {
    const [ordenAscendente, setOrdenAscendente] = useState(true)

    const ordenarProductos = (productos: Data[], ascendente: boolean) => {
        return [...productos].sort((a, b) => {
            if (ascendente) {
            return a.price - b.price;
            } else {
            return b.price - a.price;
            }
        });
    };

    

    return ( 
        <div>
            <h1>Productos</h1>
            <button onClick={() => setOrdenAscendente(!ordenAscendente)}>
                {ordenAscendente ? 'ascendente' : 'descendente'}
            </button>

            <hr />
            <table>
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                </tr>
                {
                    data.map((product) => (
                        <tr key={product.id}>
                            <td>{product.title}</td>
                            <td>{product.price}</td>
                        </tr>
                    ))
                }
            </table>
        </div>
    );
}

export default Products;