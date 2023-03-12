import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    speed: 500,
    arrows: true,
    dotsClass: 'slick-dots',
    dots: true,
  }

  const {moviesItems} = props

  const style = {
    marginLeft: '40px',
    marginRight: '80px',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  return (
    <>
      <Slider {...settings} style={style}>
        {moviesItems.map(eachMovie => (
          <MovieItem key={eachMovie.id} movieDetails={eachMovie} />
        ))}
      </Slider>
    </>
  )
}

export default MoviesSlider
