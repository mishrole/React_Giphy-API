import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    // Los efectos no pueden ser async porque esperan algo síncrono
    useEffect(() => {
        getGifs(category)
        .then(images => {
            setState({
                data: images,
                loading: false
            })
        })
    }, [category])

    return state;
}
