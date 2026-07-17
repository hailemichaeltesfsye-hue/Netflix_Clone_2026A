import React, { useEffect, useState } from 'react';
import axios from '../../../utils/axios';
import './row.css';

const base_url = 'https://image.tmdb.org/t/p/original';

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');
  const [showTrailer, setShowTrailer] = useState(false);
  const [loadingTrailer, setLoadingTrailer] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
      } catch (error) {
        console.error('Failed to load row movies', error);
      }
    }

    fetchMovies();
  }, [fetchUrl]);

  const handleTrailer = async (movie) => {
    const mediaType = movie.first_air_date ? 'tv' : 'movie';

    try {
      setLoadingTrailer(true);
      const response = await axios.get(
        `/${mediaType}/${movie.id}/videos?api_key=${process.env.REACT_APP_API_KEY}`
      );

      const trailer = response.data.results.find(
        (video) => video.type === 'Trailer' && video.site === 'YouTube'
      );

      if (trailer) {
        setTrailerUrl(`https://www.youtube.com/embed/${trailer.key}?autoplay=1`);
        setShowTrailer(true);
      } else {
        setTrailerUrl('');
        setShowTrailer(false);
      }
    } catch (error) {
      console.error('Failed to load trailer', error);
    } finally {
      setLoadingTrailer(false);
    }
  };

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => {
          const posterPath = movie.poster_path;
          if (!posterPath) return null;

          const titleText = movie.title || movie.name || movie.original_name || 'Movie';

          return (
            <div key={movie.id} className="row__posterBox">
              <img
                className={`row__poster ${isLargeRow ? 'row__posterLarge' : ''}`}
                src={`${base_url}${posterPath}`}
                alt={movie.name || movie.title || 'Movie poster'}
                onClick={() => handleTrailer(movie)}
                style={{ cursor: 'pointer' }}
              />
              <div className="row__posterTitle">{titleText}</div>
            </div>
          );
        })}
      </div>

      {showTrailer && trailerUrl && (
        <div className="row__trailerModal" onClick={() => setShowTrailer(false)}>
          <div className="row__trailerModalContent" onClick={(event) => event.stopPropagation()}>
            <button
              className="row__closeButton"
              onClick={() => setShowTrailer(false)}
              type="button"
            >
              ×
            </button>
            <iframe
              src={trailerUrl}
              title="Movie Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Row;
