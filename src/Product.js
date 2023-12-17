import React from "react";
import ProductCreateForm from "./ProductCreate";
import ProductEditForm from "./ProductEditForm";



class Product extends React.Component {

    constructor(props) {
        super();
        // console.log("constructor çalıştı")
        this.state = {
            productCreateActive: false,
            productEditActive: false,
            productList: [{
                id: 1,
                name: 'Macbook M2 PRO',
                stock: 100,
                price: 65000,
            }, {
                id: 2,
                name: ' Yadigar Masaüstü',
                stock: 95,
                price: 12000,
            }],
            loading: false,
            selectedProduct: {
            }
        }

        this.changeProductCreateActive = this.changeProductCreateActive.bind(this);
        this.addNewProduct = this.addNewProduct.bind(this);
        this.changeProductEditActive = this.changeProductEditActive.bind(this);
        this.editProduct = this.editProduct.bind(this);
    }

    setSelectedProduct(product) {

        let state = this.state;
        this.setState({
            ...state,
            selectedProduct: product,
        })
    }

    addNewProduct({ id, name, stock, price }) {
        this.setState(prevState => ({
            productList: [
                ...prevState.productList,
                { id: id, name: name, stock: stock, price: price }
            ],
            productCreateActive: prevState.productCreateActive,
            productEditActive: prevState.productEditActive,
        }))
    }

    editProduct({ id, name, stock, price }) {
        let updatedProduct = this.state.productList.find(x => x.id == id);
        updatedProduct.name = name;
        updatedProduct.stock = stock;
        updatedProduct.price = price;

    }

    changeProductCreateActive() {
        this.setState({
            productCreateActive: false,
        });
    }

    changeProductEditActive() {
        this.setState({
            productEditActive: false,
        })
    }

    deleteProduct(id) {
        this.setState(prevState => ({
            productList: prevState.productList.filter(x => x.id != id),
            productCreateActive: prevState.productCreateActive,
            productEditActive: prevState.productEditActive,
        }))
    }




    render() {
        console.log("render çalıştı")
        return (<>
            <div className="container mt-4">
                <div className="text-end">
                    <button type="button" className="btn btn-info" onClick={() => {
                        this.setState({
                            productCreateActive: true,
                        })
                    }}>Add New Product</button>
                </div>
                <h4 className="text-center">Product List</h4>
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
                        {this.state.productList && this.state.productList.map(product => (
                            <tr key={product.id}>
                                <th scope="row">{product.id}</th>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.stock}</td>
                                <td>
                                    <button className="btn btn-warning me-1" onClick={() => {

                                        this.setState({
                                            ...this.state,
                                            loading: true,

                                        })
                                        setTimeout(() => {
                                            this.setState({
                                                ...this.state,
                                                productEditActive: true,
                                                loading: false,
                                                selectedProduct: product,
                                            });
                                        }, 2000)



                                    }}>Edit</button>
                                    <button className="btn btn-danger" onClick={() => {
                                        this.deleteProduct(product.id)
                                    }}>Delete</button>
                                </td>

                            </tr>

                        ))}


                    </tbody>
                </table>




                {
                    this.state.productCreateActive === true &&
                    <ProductCreateForm onHide={this.changeProductCreateActive} onCreate={this.addNewProduct}></ProductCreateForm>
                }


                {this.state.loading === true && (<div className="d-flex align-items-center">
                    <strong role="status">Loading...</strong>
                    <div className="spinner-border ms-auto" aria-hidden="true"></div>
                </div>)}
                {
                    this.state.productEditActive === true && this.state.selectedProduct && <ProductEditForm onHide={this.changeProductEditActive} selectedProduct={this.state.selectedProduct} onUpdate={this.editProduct} ></ProductEditForm>
                }


            </div>
        </>)


    }
}

export default Product;