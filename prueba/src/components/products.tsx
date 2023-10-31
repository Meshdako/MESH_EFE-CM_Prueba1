import React from "react";
import { getFakestore } from "../services/fakestore.service";
import { FakeStore, Data, Rating } from "../interfaces/fakestore.interface"

interface Iprops {
    data: Data[]
}

function Products({ data }: Iprops) {

    return ( 
        <div>
            <h1>Products</h1>
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