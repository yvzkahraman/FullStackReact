
import { observer } from "mobx-react";
import { store } from "../stores/ApplicationStore";
import axios from "axios";

//connect => 
const Create = observer(() => {

    return <>

        <div className="mb-3">
            <label>Name :</label>
            <input type="text" className="form-control" value={store.createdProduct.name} onChange={(e) => {
                store.setCreatedProduct({
                    ...store.createdProduct,
                    name: e.target.value,
                })
            }}></input>
        </div>


        {/* <div className="mb-3">
            <label>Price :</label>
            <input type="number" className="form-control" value={store.createdProduct.price} onChange={(e) => {
                store.setCreatedProduct({
                    ...store.createdProduct,
                    price: e.target.value,
                })
            }}></input>
        </div>

        <div className="mb-3">
            <label>Stock :</label>
            <input type="number" className="form-control" value={store.createdProduct.stock} onChange={(e) => {
                store.setCreatedProduct({
                    ...store.createdProduct,
                    stock: e.target.value,
                })
            }}></input>
        </div> */}


        <div className="text-end">
            <button className="btn btn-warning btn-sm me-2" onClick={() => {
                store.setCreateFormActive(false);
            }}>Hide</button>

            <button className="btn btn-info btn-sm" onClick={() => {



                axios.post("http://localhost:5246/api/products", store.createdProduct).then(response => {

                    console.log("eklendi", response.data);

                    store.setProductList([
                        ...store.productList,
                        response.data,
                    ])

                    store.setCreatedProduct({
                        id: 0,
                        name: '',
                        price: 0,
                        stock: 0,
                    })
                }).catch(err => {
                    console.log("err", err)
                })


            }}>Create</button>
        </div>
    </>

});

export default Create;