import { action, makeObservable, observable } from 'mobx'

class ApplicationStore {

    createFormActive = false;
    editFormActive = false;

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

    constructor() {
        makeObservable(this, {
            productList: observable,
            selectedProduct: observable,
            editFormActive: observable,
            createFormActive: observable,
            setProductList: action,
            setSelectedProduct: action,
            setCreateFormActive: action,
            setEditFormActive: action,
        });
    }


}

export const store = new ApplicationStore();