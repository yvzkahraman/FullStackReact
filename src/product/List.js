
import { observer } from 'mobx-react'
import { store } from '../stores/ApplicationStore';
import { useNavigate } from 'react-router-dom';
import Edit from './Edit';
import Create from './Create';
import { useEffect } from 'react';
import axios from 'axios'

// observer

// axios 

const List = observer(() => {

    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:5246/api/products").then(response => {
            console.log("gelen response", response.data)
            store.setProductList(response.data);
        }).catch(err => {
            console.log("err", err)
        })

    }, []);

    return <>

        <div className='container mt-4'>

            <div className='text-end'>
                <button className='btn btn-primary' onClick={() => {
                    store.setCreateFormActive(true);
                }}>Add New Product</button>
            </div>


            <table className='table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Stock</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {store.productList && store.productList.map(product => (

                        <tr key={product.id}>
                            <td>
                                {product.id}
                            </td>
                            <td>
                                {product.name}
                            </td>
                            <td>
                                {product.stock}
                            </td>
                            <td>
                                {product.price}
                            </td>
                            <td>


                                <button className='btn btn-warning btn-sm me-2' onClick={() => {
                                    store.setSelectedProduct(product);
                                    store.setEditFormActive(true)
                                }}>Edit</button>

                                <button className='btn btn-danger btn-sm' onClick={() => {
                                    let newProductList = store.productList.filter(x => x.id != product.id);
                                    store.setProductList([...newProductList]);
                                }}>Remove</button>
                            </td>
                        </tr>

                    ))}

                </tbody>
            </table>

            {store.editFormActive === true ? <> <Edit></Edit></> : <></>}

            {store.createFormActive === true ? <><Create></Create></> : <></>}

        </div>



    </>
});

export default List;