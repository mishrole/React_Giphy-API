import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem'

require('dotenv').config()

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs();
    }, []);

    const getGifs = async () => {
        const endpoint = 'http://api.giphy.com/v1/gifs/search';
        const limit = 10;

        const URL  = `${endpoint}?api_key=${process.env.REACT_APP_API_KEY}&q=${category}&limit=${limit}`;
        const response = await fetch(URL);
        const {data} = await response.json();

        const gifs = data.map(gif => {
            return {
                id: gif.id,
                title: gif.title,
                url: gif.images?.downsized_medium.url
            }
        });

        setImages(gifs);
    }

    // getGifs();

    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                {
                    images.map( img => {
                        return (
                            <GifGridItem key={img.id} {...img} /> 
                        )   
                    })
                }

            </div>
        </>
        
    )
}
