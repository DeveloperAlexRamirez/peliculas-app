import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Movie} from '../interfaces/movieInterface';

interface Props {
  movie: Movie;
}

const MovieCard = ({movie}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <View style={styles.sombra}>
      <Image
        source={{
          uri,
        }}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    // Para que se expanda en el view
    flex: 1,
    borderRadius: 20,
  },

  sombra: {
    // Para que se expanda en el view
    width: 300,
    height: 420,

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.32,
    shadowRadius: 20,

    elevation: 7,

    borderRadius: 20,
  },
});

export default MovieCard;
