import { observer } from "mobx-react"
import { store } from "../stores/ApplicationStore";

const Edit = observer(() => {
    return (<>

        <div className="mb-3">
            {store.selectedProduct.name}
        </div>

        <div>
            <button className='btn btn-warning btn-sm' onClick={() => {
                { store.setEditFormActive(false) }
            }}>Hide</button>
        </div>
    </>);
});

export default Edit;