import React, { Component } from 'react'
import CardImproved from '../cards/ImprovedCard'

class DynamicMoviesList extends Component {

    constructor() {
        super()
        this.state = {
            movies: [
                { title: "The Godfather", director: "Francis Coppola", hasOscars: false, IMDbRating: 7 },
                { title: "Star Wars", director: "Rian Johnson", hasOscars: true, IMDbRating: 9.2 },
                { title: "Titanic", director: "James Cameron", hasOscars: true, IMDbRating: 5 },
                { title: "Batman returns", director: "Nolan", hasOscars: true, IMDbRating: 9.2 },
                { title: "The Shawshank Redemption", director: "Frank Darabont", hasOscars: false, IMDbRating: 6.3 }
            ],
            showOscarAwarded: false
        }
    }

    deleteMovie = idx => {
        const moviesCopy = [...this.state.movies]
        moviesCopy.splice(idx, 1)
        this.setState({ movies: moviesCopy })
    }


    toggleOscarsList = () => this.setState({ showOscarAwarded: !this.state.showOscarAwarded }, () => console.log('Estado actualizado'))



    render() {

        const filteredMovies = this.state.movies.filter(elm => elm.hasOscars === this.state.showOscarAwarded)

        return (
            <>
                {filteredMovies.map((elm, idx) => <CardImproved key={idx} {...elm} deleteOneMovie={() => this.deleteMovie(idx)} />)}
                <br></br>
                <br></br>
                <br></br>
                <button onClick={this.toggleOscarsList}>
                    {this.state.showOscarAwarded ? <>Mostrar películas sin Oscar</> : <>Mostrar películas con Oscar</>}
                </button>
            </>
        )
    }
}

export default DynamicMoviesList