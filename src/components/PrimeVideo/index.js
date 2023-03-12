import {Component} from 'react'
import MoviesSlider from '../MoviesSlider'
import './index.css'

class PrimeVideo extends Component {
  render() {
    const moviesList = this.props

    const filterActionMovies = moviesList.moviesList.filter(
      each => each.categoryId === 'ACTION',
    )

    const filterComedyMovies = moviesList.moviesList.filter(
      each => each.categoryId === 'COMEDY',
    )
    return (
      <div className="prime-video-container">
        <div className="prime-video-header-image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
            alt="prime video"
            className="primevideo"
          />
        </div>
        <div className="prime-video-heading-text-container">
          <h1 className="header-text">Action Movies</h1>
        </div>
        <div className="prime-video-action-movies-container">
          <MoviesSlider moviesItems={filterActionMovies} />
        </div>
        <div className="prime-video-heading-text-container">
          <h1 className="header-text">Comedy Movies</h1>
        </div>
        <div className="prime-video-action-movies-container">
          <MoviesSlider moviesItems={filterComedyMovies} />
        </div>
      </div>
    )
  }
}

export default PrimeVideo
