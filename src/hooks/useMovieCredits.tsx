import {useState, useEffect} from 'react';
import {MovieFull} from '../interfaces/movieInterface';
import movieDB from '../api/movieDB';
import {Cast, MovieCreditsResponse} from '../interfaces/movieCredits';

interface MovieDetails {
  loading: boolean;
  movieFull?: MovieFull;
  cast: Cast[];
}

export const movieCredits = (idMovie: number) => {
  const [state, setState] = useState<MovieDetails>({
    loading: true,
    movieFull: undefined,
    cast: [],
  });

  const getDetailsMovie = async () => {
    const movieDetailsPromise = movieDB.get<MovieFull>(`/${idMovie}`);
    const movieCreditsPromise = movieDB.get<MovieCreditsResponse>(
      `/${idMovie}/credits`,
    );

    const [movieDetailsResp, movieCreditsResp] = await Promise.all([
      movieDetailsPromise,
      movieCreditsPromise,
    ]);

    setState({
      loading: false,
      movieFull: movieDetailsResp.data,
      cast: movieCreditsResp.data.cast,
    });
  };

  useEffect(() => {
    getDetailsMovie();
  }, []);

  return {
    ...state,
  };
};
