import React, { Fragment } from 'react'
import MovieListItem from './MovieListItem'

function MoviesList({movies}) {

  const movieComponent = movies.map(movie => {
    return (
      <MovieListItem url={movie.url} key={movie.id}>
        {movie.name}
      </MovieListItem>
    )
  })

  return (
    <Fragment>
      <h2>Upcoming film releases in the UK</h2>
      {movieComponent}
      <p><a href="https://www.imdb.com/calendar/?region=gb">View more upcoming releases >></a></p>
    </Fragment>
  )
}

export default MoviesList;