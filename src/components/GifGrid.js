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
            <h3 className="animate__animated animate__fadeIn animate__delay-1s">{category}</h3>
            {
                loading && <p className="animate__animated animate__flash animate__delay-1s">loading</p>
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
