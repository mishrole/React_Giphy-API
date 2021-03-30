export const getGifs = async ( category ) => {
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

    // Regresa una promesa que resuelve la colección
    return gifs;
    // setImages(gifs);
}