import React from 'react';
import {View, ActivityIndicator, Dimensions} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import Carousel from 'react-native-snap-carousel';

import {useMovies} from '../hooks/useMovies';
import MovieCard from '../components/MovieCard';

const {width: windowWidth} = Dimensions.get('window');

const HomeScreen = () => {
  const {top} = useSafeAreaInsets();

  const {peliculasEnCine, loading} = useMovies();

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator color="blue" size={80} />
      </View>
    );
  }

  return (
    <View style={{marginTop: top + 20}}>
      <View
        style={{
          height: 440,
          // backgroundColor: 'red',
        }}>
        <Carousel
          // TODO: Propiedades necesarias para el Carousel
          data={peliculasEnCine}
          renderItem={({item}: any) => <MovieCard movie={item} />}
          sliderWidth={windowWidth}
          itemWidth={300}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
