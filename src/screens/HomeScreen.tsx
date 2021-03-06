import React, {useContext} from 'react';
import {View, Dimensions, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import Carousel from 'react-native-snap-carousel';

import {useMovies} from '../hooks/useMovies';
import MovieCard from '../components/MovieCard';
import HorizontalSlider from '../components/HorizontalSlider';
import Loading from '../components/Loading';
import GrandienteBackground from '../components/GrandienteBackground';

// Para extraer el color dominante
import ImageColors from 'react-native-image-colors';
import getImageColors from '../helpers/getColores';
import {GradientContext} from '../context/GradientCotext';

const {width: windowWidth} = Dimensions.get('window');

const HomeScreen = () => {
  const {setMainColors} = useContext(GradientContext);

  const {top} = useSafeAreaInsets();

  const {loading, nowPlaying, popular, topRated, upcoming} = useMovies();

  const getPosterColors = async (index: number) => {
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const [primary = 'black', secundary = 'white'] = await getImageColors(uri);

    setMainColors({
      primary,
      secundary,
    });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <GrandienteBackground>
      <ScrollView>
        <View style={{marginTop: top + 20}}>
          {/* Carousel principal */}
          <View
            style={{
              height: 440,
              // backgroundColor: 'red',
            }}>
            <Carousel
              // TODO: Propiedades necesarias para el Carousel
              data={nowPlaying}
              renderItem={({item}: any) => <MovieCard movie={item} />}
              sliderWidth={windowWidth}
              itemWidth={300}
              inactiveSlideOpacity={0.9}
              onSnapToItem={index => getPosterColors(index)}
            />
          </View>

          {/* Peliculas populares */}
          <HorizontalSlider title="Popular movies" movies={popular} />
          <HorizontalSlider title="Top rated" movies={topRated} />
          <HorizontalSlider title="Upcoming" movies={upcoming} />
        </View>
      </ScrollView>
    </GrandienteBackground>
  );
};

export default HomeScreen;
