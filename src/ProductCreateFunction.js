import { useState } from "react";

const ProductCreateFormFunction = (props) => {

    const [product, setProduct] = useState({
        id: 0,
        name: '',
        stock: 0,
        price: 0
    })

    return (<>
        <div>
            <p>Product Create Form Function</p>
            <div className="mb-3">
                <label> Id :</label>
                <input type="number" className="form-control" value={product.id} onChange={(e) => {
                    setProduct(prevState => ({
                        ...prevState,
                        id: e.target.value,
                    }))
                }}></input>
            </div>

            <div className="mb-3">
                <label> Name :</label>
                <input type="text" className="form-control" value={product.name} onChange={(e) => {
                    setProduct(prevState => ({
                        ...prevState,
                        name: e.target.value,
                    }))
                }}></input>
            </div>


            <div className="mb-3">
                <label> Stock :</label>
                <input type="number" className="form-control" value={product.stock} onChange={(e) => {
                    setProduct(prevState => ({
                        ...prevState,
                        stock: e.target.value,
                    }))
                }}></input>
            </div>


            <div className="mb-3">
                <label>Price :</label>
                <input type="number" value={product.price} className="form-control" onChange={(e) => {
                    setProduct(prevState => ({
                        ...prevState,
                        price: e.target.value,
                    }))
                }}></input>
            </div>


            <div className="text-end">
                <button type="button" className="btn btn-warning btn-sm me-2" onClick={() => {
                    props.onHide();
                }}>Hide</button>

                <button type="button" className="btn btn-info btn-sm" onClick={() => {

                    props.onCreate(product);
                    setProduct({
                        id: 0,
                        name: '',
                        stock: 0,
                        price: 0
                    })
                }}>Submit</button>
            </div>
        </div >
    </>)
}


export default ProductCreateFormFunction;