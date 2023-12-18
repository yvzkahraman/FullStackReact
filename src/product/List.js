
import { observer } from 'mobx-react'
import { store } from '../stores/ApplicationStore';
import { useNavigate } from 'react-router-dom';
import Edit from './Edit';

// observer

// axios 

const List = observer(() => {

    const navigate = useNavigate();

    return <>

        <div className='container mt-4'>

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

                                <button className='btn btn-warning btn-sm' onClick={() => {

                                }}>Remove</button>
                            </td>
                        </tr>

                    ))}

                </tbody>
            </table>

            {store.editFormActive === true ? <> <Edit></Edit></> : <></>}

        </div>



    </>
});

export default List;