import React, { useState, useEffect } from 'react';
require('dotenv').config();

export const GifGrid = ({ category }) => {

    const [count, setCount] = useState(0);

    /*  UseEffect ejecutar algo de manera condicional
        Si lo pasamos sin dependencias [], sólo se ejecutará una vez
        De esta forma, sólo se ejecuta getGifs cuando el componente
        Es renderizado por primera vez 
    */
   
    useEffect(() => {
        getGifs();
    }, []);

    const getGifs = async () => {
        const endpoint = 'http://api.giphy.com/v1/gifs/search';
        const query = 'Goku';
        const limit = 10;
        const api_key = process.env.REACT_APP_API_KEY;

        const URL  = `${endpoint}?api_key=${api_key}&q=${query}&limit=${limit}`;
        const response = await fetch(URL);
        const {data} = await response.json();

        const gifs = data.map(gif => {
            return {
                id: gif.id,
                title: gif.title,
                url: gif.images?.downsized_medium.url
            }
        });

        console.log(gifs)
    }

    // getGifs();

    return (
        <div>
            <h3>{category}</h3>
            <h4> {count}</h4>
            {/* Cada click vuelve a disparar getGifs
            Solución: useEffect */}
            <button onClick={() => setCount(count + 1)}></button>
        </div>
    )
}
