import { action, makeObservable, observable } from 'mobx'

class ApplicationStore {

    createFormActive = false;
    editFormActive = false;

    createdProduct = {
        id: 0,
        name: '',
        stock: 0,
        price: 0,
    }

    productList = [
    ]

    selectedProduct = {

    }

    setProductList(productList) {
        this.productList = productList;
    }

    setSelectedProduct(selectedProduct) {
        this.selectedProduct = selectedProduct;
    }

    setEditFormActive(active) {
        this.editFormActive = active;
    }

    setCreateFormActive(active) {
        this.createFormActive = active;
    }


    setCreatedProduct(product) {
        this.createdProduct = product;
    }

    constructor() {
        makeObservable(this, {
            productList: observable,
            selectedProduct: observable,
            editFormActive: observable,
            createFormActive: observable,
            createdProduct: observable,
            setProductList: action,
            setSelectedProduct: action,
            setCreateFormActive: action,
            setEditFormActive: action,
            setCreatedProduct: action,
        });
    }


}

export const store = new ApplicationStore();