import React from 'react';
import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';
import {useFetchGifs} from '../hooks/useFetchGifs';

require('dotenv').config()

export const GifGrid = ({ category }) => {

    // Renombrar actual:nuevo
    const { data:images, loading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {
                loading && <p>loading</p>
            }
            {/* { loading ? 'Cargando...' : 'Data cargada'} */}

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
