import React from 'react'
import './Card.css'

const card = ({ title, director }) => {
    return (
        <article className="movieCard">
            <h2>{title}</h2>
            <p>Director: {director}</p>
        </article>
    )
}

export default card