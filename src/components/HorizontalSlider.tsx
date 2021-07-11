import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {Movie} from '../interfaces/movieInterface';
import MovieCard from './MovieCard';

interface Props {
  movies: Movie[];
  title?: string;
}

const HorizontalSlider = ({movies, title}: Props) => {
  return (
    <View
      style={{
        height: title ? 270 : 240,
      }}>
      {title && <Text style={{fontSize: 30, fontWeight: 'bold'}}>{title}</Text>}
      <FlatList
        data={movies}
        renderItem={({item}: any) => (
          <MovieCard movie={item} width={150} height={220} margin={8} />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default HorizontalSlider;
