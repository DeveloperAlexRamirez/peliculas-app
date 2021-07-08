import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Movie} from '../interfaces/movieInterface';

interface Props {
  movie: Movie;
}

const MovieCard = ({movie}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <View>
      <Image
        source={{
          uri,
        }}
        style={styles.image}
      />
      <Text
        style={{
          marginTop: 20,
          fontSize: 34,
        }}>
        {movie.title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '90%',
  },
});

export default MovieCard;
