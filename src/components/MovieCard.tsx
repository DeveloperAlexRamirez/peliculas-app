import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Movie} from '../interfaces/movieInterface';

interface Props {
  movie: Movie;
  width?: number;
  height?: number;
  margin?: number;
}

const MovieCard = ({movie, width = 300, height = 420, margin = 0}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <View style={{width, height}}>
      <View style={styles.sombra}>
        <Image
          source={{uri}}
          style={{...styles.image, marginHorizontal: margin}}
        />
      </View>
    </View>
  );
};

// TODO: CORREGIR LO DE LOS SHADOWS
const styles = StyleSheet.create({
  image: {
    // Para que se expanda en el view
    flex: 1,
    borderRadius: 18,
  },

  sombra: {
    // Para que se expanda en el view
    flex: 1,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 7,

    elevation: 9,

    borderRadius: 18,
  },
});

export default MovieCard;
