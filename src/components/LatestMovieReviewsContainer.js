import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=DKhSHv59S45uKTlnep1WK6IalUBWcfV2'

class LatestMovieReviewsContainer extends Component {
    constructor() {
        super()
        this.state = {
            reviews: []
        }
    }

    componentDidMount() {
        fetch(URL)
        .then(response => response.json())
        .then(data => this.setState({reviews: data.results}))
    }

    render () {
        return (
            <div className='latest-movie-reviews'>
                {this.state.review}
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}

export default LatestMovieReviewsContainer