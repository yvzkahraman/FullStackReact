import { observer } from "mobx-react"
import { store } from "../stores/ApplicationStore";

const Edit = observer(() => {

    return (<>
        <div className="mb-3">
            <label>Name :</label>
            <input type="text" className="form-control" value={store.selectedProduct.name} onChange={(e) => {
                store.setSelectedProduct({
                    ...store.selectedProduct,
                    name: e.target.value,
                })
            }}></input>
        </div>

        <div className="mb-3">
            <label>Price :</label>
            <input type="number" className="form-control" value={store.selectedProduct.price} onChange={(e) => {
                store.setSelectedProduct({
                    ...store.selectedProduct,
                    price: e.target.value,
                })
            }}></input>

        </div>
        <div className="mb-3">
            <label>Stock :</label>
            <input type="number" className="form-control" value={store.selectedProduct.stock} onChange={(e) => {
                store.setSelectedProduct({
                    ...store.selectedProduct,
                    stock: e.target.value,
                })
            }}></input>

        </div>

        <div>
            <button className='btn btn-warning btn-sm me-2' onClick={() => {
                { store.setEditFormActive(false) }
            }}>Hide</button>

            <button className='btn btn-primary btn-sm' onClick={() => {
                let updateProdcut = store.productList.find(x => x.id == store.selectedProduct.id);
                updateProdcut.id = store.selectedProduct.id;
                updateProdcut.name = store.selectedProduct.name;
                updateProdcut.price = store.selectedProduct.price;
                updateProdcut.stock = store.selectedProduct.stock;

                store.setProductList([
                    ...store.productList
                ])
            }}>Submit</button>
        </div>
    </>);
});

export default Edit;