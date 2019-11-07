import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=DKhSHv59S45uKTlnep1WK6IalUBWcfV2&query='

            

class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super()
        this.state = {
            reviews: [],
            searchTerm: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()

        fetch(URL + this.state.searchTerm)
        .then(response => response.json())
        .then(data => this.setState({reviews: data.results}))
    }

    handleChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }


    render () {
        return (
            <div className='latest-movie-reviews'>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <input type='text' value={this.state.searchTerm} onChange={e => this.handleChange(e)}/>
                    <button type='submit'>Search</button>
                </form>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer
