import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball Z']);

    // const handleAdd = () => {
    //     setCategories(['HunterXHunter', ...categories]);
    //     // setCategories (categories => ['HunterXHunter', ...categories]);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory />
            <hr />

            <ol>
                { categories.map((category, index) => {
                    return <li key={ `${category}-${index}` }>{category}</li>
                }) }
            </ol>
        </>
    )
}

export default GifExpertApp;