import React from "react";
import { getFakestore } from "../services/fakestore.service";
import { FakeStore, Data, Rating } from "../interfaces/fakestore.interface"

interface Iprops {
    data: Data[]
}

function Products({ data }: Iprops) {

    return ( 
        <div>
            <h1>Productos</h1>
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