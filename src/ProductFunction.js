import { useState } from "react";
import ProductCreateFormFunction from "./ProductCreateFunction";
import ProductEditFormFunction from "./ProductEditFunction";

const ProductFunction = () => {

    const [productList, setProductList] = useState([{
        id: 1,
        name: 'Macbook M2 PRO',
        stock: 100,
        price: 65000,
    }, {
        id: 2,
        name: ' Yadigar Masaüstü',
        stock: 95,
        price: 12000,
    }])

    const [selectedProduct, setSelectedProduct] = useState({});


    const [createFormActive, setCreateFormActive] = useState(false);

    const [editFormActive, setEditFormActive] = useState(false);

    const [refreshFlag, setRefreshFlag] = useState(false);

    const hideCreateForm = () => {
        setCreateFormActive(false);
    }

    const hideEditForm = () => {
        setEditFormActive(false);
    }

    const createProduct = (product) => {
        setProductList(prevState => ([
            ...prevState,
            product
        ]));
    }

    const editProduct = (product) => {

        let updatedProduct = productList.find(x => x.id == product.id);
        updatedProduct.name = product.name;
        updatedProduct.price = product.price;
        updatedProduct.stock = product.stock;

        setRefreshFlag(!refreshFlag);
    }


    return (<>
        <div className="container mt-4">
            <h4 className="text-center">Product List </h4>
            <div className="text-end">
                <button type="button" className="btn btn-info" onClick={() => {
                    setCreateFormActive(true);
                }}>Add New Product</button>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Stock</th>
                        <th scope="col"></th>
                    </tr>
                </thead>

                <tbody>
                    {productList && productList.map(product => (
                        <tr key={product.id}>

                            <td scope="row">{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.stock}</td>
                            <td>

                                <button className="btn btn-warning btn-sm me-2" onClick={() => {

                                    setSelectedProduct(product);
                                    setEditFormActive(true);

                                    console.log("selected product", selectedProduct);
                                }}>Edit</button>
                                <button className="btn btn-danger btn-sm" onClick={() => {
                                    let products = productList.filter(x => x.id != product.id);
                                    setProductList([...products]);
                                }}>Remove</button>
                            </td>

                        </tr>

                    ))}
                </tbody>
            </table>


            {createFormActive === true ? <>
                <ProductCreateFormFunction onHide={hideCreateForm} onCreate={createProduct}></ProductCreateFormFunction>
            </> : <></>}


            {editFormActive === true && selectedProduct ? <>
                <ProductEditFormFunction onHide={hideEditForm} selectedProduct={selectedProduct} onEdit={editProduct}></ProductEditFormFunction>
            </> : <></>}
        </div>
    </>)
}

export default ProductFunction;