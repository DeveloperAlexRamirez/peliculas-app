import React from 'react';
import {View, ActivityIndicator, Dimensions, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import Carousel from 'react-native-snap-carousel';

import {useMovies} from '../hooks/useMovies';
import MovieCard from '../components/MovieCard';
import HorizontalSlider from '../components/HorizontalSlider';

const {width: windowWidth} = Dimensions.get('window');

const HomeScreen = () => {
  const {top} = useSafeAreaInsets();

  const {loading, nowPlaying, popular, topRated, upcoming} = useMovies();

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator color="red" size={80} />
      </View>
    );
  }

  return (
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
          />
        </View>

        {/* Peliculas populares */}
        <HorizontalSlider title="Popular movies" movies={popular} />
        <HorizontalSlider title="Top rated" movies={topRated} />
        <HorizontalSlider title="Upcoming" movies={upcoming} />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
