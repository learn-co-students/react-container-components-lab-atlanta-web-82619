import React from 'react'

const Review = ({headline, byline, multimedia, display_title, summary_short, link}) => {
    return (
    <div className='review'>
        <h1>{headline}</h1>
        <h5>By: {byline}</h5>
        <img src={multimedia.src} alt={display_title}/>
        <p>{summary_short}</p>
        <a href={link.url}>{link.suggested_link_text}</a>
    </div>
    )
}

const MovieReviews = (props) => {
    return (
        <div className='review-list'>
            {props.reviews.map(Review)}
        </div>
    )
}

export default MovieReviews