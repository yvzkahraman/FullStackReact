import React, { useEffect, useState } from "react";

export class Category extends React.Component {

    constructor() {
        super();

        this.state = {
            category: {
                id: 1,
                name: 'Giyim'
            }
        }
    }


    render() {
        return <>
            <p>Category Class Component - {this.state.category.name}</p>
        </>
    }

}

// hook
export function CategoryFunction() {

    // useEffect()

    const [number, setNumber] = useState(0);
    const [category, setCategory] = useState({ id: 0, name: 'Giyim' });
    return (

        <>

            <p>Category Function Component - {number}</p>

            <button onClick={() => {
                setNumber(number + 1)
            }}>+</button>


            <p>Category Name - {category.name}</p>
        </>
    )
}


function CategoryHome() {
    return (
        <>
            <Category></Category>
            <CategoryFunction></CategoryFunction>
        </>
    )
}


export default CategoryHome;