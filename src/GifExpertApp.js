import React, { useState } from 'react';

const GifExpertApp = () => {

    // Así no se hace, si no cómo usamos estados
    // const categories = 

    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball Z']);

    // No debemos usar push para mutar el objeto
    const handleAdd = () => {
        // Si hacemos sólo setCategories('HunterXHunter')
        // Ahora es un string, no un array
        // Entonces categories no es un arreglo
        // Y categories.map() no es una función
        setCategories(['HunterXHunter', ...categories]);
        // setCategories (categories => ['HunterXHunter', ...categories]);
    }

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />

            <button onClick={handleAdd}>Agregar</button>

            <ol>
                { categories.map((category, index) => {
                    return <li key={ `${category}-${index}` }>{category}</li>
                }) }
            </ol>
        </>
    )
}

export default GifExpertApp;