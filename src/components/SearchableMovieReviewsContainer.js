import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'itiCIRIIaZdtR2cVy4Jyc2oOPDPmblPx';
const ending =  `api-key=${NYT_API_KEY}&query=`;
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'+ ending


// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
  state = {
    searchTerm: "",
    reviews: []
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    fetch(BASE_URL.concat(this.state.searchTerm))
    .then(resp => resp.json())
    .then(data => this.setState({reviews: data.results}))
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form  onSubmit={this.handleSubmit} >
          <label htmlFor="search-input">Search Movie Reviews</label>
          <input id="search-input" type="text" defaultValue={this.state.searchTerm} onChange={ this.handleChange}></input>
          <button type="submit">Search</button>
        </form>
        {typeof this.state.reviews === 'object' &&
          this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2>}
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer;
