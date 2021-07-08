import React from 'react';
import {View, Text, ActivityIndicator, TouchableOpacity} from 'react-native';
import useMovies from '../hooks/useMovies';
import MovieCard from '../components/MovieCard';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

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
      <MovieCard movie={peliculasEnCine[0]} />
    </View>
  );
};

export default HomeScreen;
