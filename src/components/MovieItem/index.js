import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails

  return (
    <div className="container">
      <Popup
        modal
        trigger={
          <button className="trigger-button" type="button">
            <img
              src={thumbnailUrl}
              alt="thumbnail"
              className="thumbnailImage"
            />
          </button>
        }
      >
        {close => (
          <>
            <div>
              <ReactPlayer url={videoUrl} controls />
            </div>
            <button
              type="button"
              className="trigger-button"
              onClick={() => close()}
            >
              <IoMdClose data-testid="closeButton" />
            </button>
          </>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
