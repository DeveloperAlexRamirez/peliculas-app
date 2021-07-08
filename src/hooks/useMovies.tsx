import {useState, useEffect} from 'react';
import movieDB from '../api/movieDB';
import {Movie, MovieDBNowPlaying} from '../interfaces/movieInterface';

const useMovies = () => {
  const [loading, setLoadgin] = useState(true);

  // TODO: Es de tipo Movie (archivo: movieInterface)
  const [peliculasEnCine, setPeliculasEnCine] = useState<Movie[]>([]);
  const getMovies = async () => {
    // TODO: Es de tipo MovieDBNowPlaying (archivo: movieInterface)
    const resp = await movieDB.get<MovieDBNowPlaying>('/now_playing');

    setPeliculasEnCine(resp.data.results);

    setLoadgin(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    peliculasEnCine,
    loading,
  };
};

export default useMovies;
