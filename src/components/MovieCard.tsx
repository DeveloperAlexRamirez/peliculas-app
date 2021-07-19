import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Movie} from '../interfaces/movieInterface';
import {useNavigation} from '@react-navigation/core';

interface Props {
  movie: Movie;
  width?: number;
  height?: number;
  margin?: number;
}

const MovieCard = ({movie, width = 300, height = 420, margin = 0}: Props) => {
  const navigation = useNavigation();

  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <TouchableOpacity
      style={{
        width,
        height,
        marginHorizontal: 2,
      }}
      activeOpacity={0.9}
      onPress={() => navigation.navigate('DetailScreen', movie)}>
      <View style={styles.sombra}>
        <Image
          source={{uri}}
          style={{...styles.image, marginHorizontal: margin}}
        />
      </View>
    </TouchableOpacity>
  );
};

// TODO: CORREGIR LO DE LOS SHADOWS
export const styles = StyleSheet.create({
  sombra: {
    // Para que se expanda en el view
    flex: 1,

    borderRadius: 18,
    shadowColor: '#000000',

    shadowOffset: {
      width: 0,
      height: 10,
    },

    shadowOpacity: 0.25,
    shadowRadius: 18,

    elevation: 13,
  },

  image: {
    // Para que se expanda en el view
    flex: 1,
    borderRadius: 18,
  },
});

export default MovieCard;
