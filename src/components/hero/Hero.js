import './Hero.css';
import Carousal from 'react-material-ui-carousel';
import { Paper } from '@mui/material';


const Hero = ({movies}) => {
  return (
    <div className = 'movie-carousel-container'>
      <Carousal>
        {
          movies.map((movie) => {
              return (
                <Paper>
                  <div className = 'movie-card-container'>
					  <div className="movie-card">
						  <div className="movie-poster">
							  <img src={movie.poster} alt="" />
						  </div>
						  <div className = "movie-title">
							  <h4>{movie.title}</h4>
						  </div>
					  </div>
                  </div>
                </Paper>
              )
          }
          )
        }
      </Carousal>
    </div>
  )
}

export default Hero