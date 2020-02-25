import React from 'react';
import './Card.css'

const improvedCard = props => {
    return (
        <article className="improvedMovieCard">
            <h4>{props.title}</h4>
            <p><small>Director: {props.director} {props.hasOscars ? <>(tiene Oscar)</> : <>(no tiene Oscar)</>}</small></p>

            {/* En caso de disponer de un valor truthy, ejecuta el bloque derecho */}
            {props.IMDbRating > 8 && <p><small>¡Tiene una gran puntuación!</small></p>}
            <button onClick={props.deleteOneMovie}>Eliminar película</button>
        </article>
    )
}

export default improvedCard;