import React from 'react'
import Card from '../cards/Card'

// Datos
const cities = ['Madrid', 'Barcelona', 'Bilbao', 'Praga']
const badMovies = ['Sharknado', 'Campamento Flippy', 'Brácula']
const goodmovies = [
    { title: "Jurassic Park", director: "Steven Spielberg" },
    { title: "Sharknado", director: "Anthony C. Ferrante" },
    { title: "Titanic", director: "James Cameron" }
]

// Exportaciones nominales (múltiples exportaciones desde un archivo)
export const citiesList = cities.map((elm, idx) => <li key={idx}>{elm}</li>)
export const badMoviesList = badMovies.map((elm, idx) => <li key={idx}>{elm}</li>)
export const goodmoviesList = goodmovies.map((elm, idx) => <Card key={idx} {...elm} />)