import React from 'react'

export const GifGridItem = ( {title, url} ) => {

    return (
        <div className="card">
            <div className="card__image">
                <img src={url} alt={title} />
            </div>
            <div className="card__title">
                <p>{title}</p>
            </div>
        </div>
    )
}
