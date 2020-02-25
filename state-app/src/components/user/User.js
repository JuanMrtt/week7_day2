import React from 'react'
import './User.css'

const User = props => {
    return (
        <article className="userCard" style={{ backgroundColor: props.background }}>
            <img src={props.avatarUrl} alt={`${props.firstName} ${props.lastName}`}></img>
            <div className="info">
                <h4>{props.firstName} {props.lastName}</h4>
                <hr></hr>
                <p>Edad: {props.age} años</p>
            </div>
        </article>
    )
}

export default User