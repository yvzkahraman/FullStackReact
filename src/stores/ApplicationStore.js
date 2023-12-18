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
        {
            id: 1,
            name: 'Macbook M2 PRO',
            stock: 200,
            price: 65000
        },
        {
            id: 2,
            name: 'Toplama PC',
            stock: 100,
            price: 20000,
        }
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