import React from "react";
class ProductEditForm extends React.Component {

    constructor(props) {
        super();


        this.props = props;
        this.state = {
            product: {
                id: 0,
                name: '',
                price: 0,
                stock: 0,
            }
        }



    }


    componentDidMount() {
        this.setState(prevState => ({
            ...prevState,
            product: this.props.selectedProduct,
        }))
    }



    render() {
        return (<>
            <div className="container">


                <div className="mb-3">
                    <label>Id :</label>
                    <input type="number" readOnly={true} className="form-control" placeholder="Price" value={this.state.product.id} onChange={(e) => {

                    }}></input>

                </div>



                <div className="mb-3">
                    <label>Name :</label>
                    <input type="text" className="form-control" placeholder="Name" value={this.state.product.name} onChange={(e) => {
                        this.setState(prevState => (
                            {

                                product: {
                                    ...prevState.product,
                                    name: e.target.value
                                }
                            }
                        ))

                        console.log("state", this.state);
                    }}></input>

                </div>



                <div className="mb-3">
                    <label>Stock :</label>
                    <input type="number" className="form-control" placeholder="Stock" value={this.state.product.stock} onChange={(e) => {
                        this.setState(prevState => (
                            {

                                product: {
                                    ...prevState.product,
                                    stock: e.target.value
                                }
                            }
                        ))
                    }}></input>

                </div>


                <div className="mb-3">
                    <label>Stock :</label>
                    <input type="number" className="form-control" placeholder="Price" value={this.state.product.price} onChange={(e) => {
                        this.setState(prevState => (
                            {
                                product: {
                                    ...prevState.product,
                                    price: e.target.value
                                }
                            }
                        ))
                    }}></input>

                </div>


                <div className="mb-3 text-end">
                    <button className="btn btn-warning btn-sm" onClick={() => {
                        this.props.onHide();
                    }}>Hide</button>

                    <button type="button" className="btn btn-info btn-sm" onClick={() => {
                        this.props.onUpdate(this.state.product)
                        this.props.onHide();
                    }}>Submit</button>
                </div>
            </div>
        </>)
    }

}

export default ProductEditForm;