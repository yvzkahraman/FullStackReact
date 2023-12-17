import React from "react";
class ProductCreateForm extends React.Component {


    // Functional Componentler + MobX
    // Redux Redux Toolkit,
    // MobX Toolkit
    constructor(props) {
        super();
        console.log("props", props);
        this.state = {
            createdProduct: {
                id: 0,
                name: '',
                stock: 0,
                price: 0,
            }
        }
    }

    render() {
        return (<>
            <div>
                <div className="mb-3">
                    <label>Id : </label>
                    <input type="number" className="form-control" value={this.state.createdProduct.id} onChange={(e) => {

                        this.setState(prevState => ({
                            createdProduct: {
                                ...prevState.createdProduct,
                                id: e.target.value,
                            }
                        }))
                    }} />
                </div>

                <div className="mb-3">
                    <label>Name : </label>
                    <input type="text" className="form-control" value={this.state.createdProduct.name} onChange={(e) => {

                        this.setState(prevState => ({
                            createdProduct: {
                                ...prevState.createdProduct,
                                name: e.target.value,
                            }
                        }))
                    }} />
                </div>


                <div className="mb-3">
                    <label>Price : </label>
                    <input type="number" className="form-control" value={this.state.createdProduct.price} onChange={(e) => {

                        this.setState(prevState => ({
                            createdProduct: {
                                ...prevState.createdProduct,
                                price: e.target.value,
                            }
                        }))
                    }} />
                </div>

                <div className="mb-3">
                    <label>Stock : </label>
                    <input type="number" className="form-control" value={this.state.createdProduct.stock} onChange={(e) => {

                        this.setState(prevState => ({
                            createdProduct: {
                                ...prevState.createdProduct,
                                stock: e.target.value,
                            }
                        }))
                    }} />
                </div>

                <div className="mb-3 text-end">
                    <button type="button" className="btn btn-warning btn-sm me-2" onClick={() => {
                        this.props.onHide();
                    }}>Hide</button>

                    <button type="button" className="btn btn-info btn-sm" onClick={() => {
                        this.props.onCreate(this.state.createdProduct)

                        this.setState({
                            createdProduct: {
                                id: 0,
                                name: '',
                                price: 0,
                                stock: 0,
                            }
                        })
                    }}>Submit</button>
                </div>


            </div>


        </>)
    }
}

export default ProductCreateForm;
