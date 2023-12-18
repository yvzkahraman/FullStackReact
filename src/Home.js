import React from "react";

import { Link } from "react-router-dom";
import { observer } from 'mobx-react'
import { store } from "./stores/ApplicationStore";


const Home = () => {
    return (<>
        <div className="container mt-4">
            <div className="w-50 mx-auto list-group">
                <p className="text-center lead">Select Site</p>
                <Link to={"/counter"} className="list-group-item list-group-item-action" >  Counter App</Link>
                <Link to={"/products"} className="list-group-item list-group-item-action" >  Product App</Link>
                <Link to={"/component"} className="list-group-item list-group-item-action"> Class & Func Component </Link>
            </div>
        </div>


    </>)
}


export default Home;