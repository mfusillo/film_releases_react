import React from 'react'

function MovieListItem({children, url}){

  return (
    <li><a href={url}>{children}</a></li>
  )
}

export default MovieListItem;