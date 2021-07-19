import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Cast} from '../interfaces/movieCredits';

interface Props {
  cast: Cast;
}

const ActorItem = ({cast}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${cast.profile_path}`;

  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        {cast.profile_path && <Image source={{uri}} style={styles.image} />}

        <View style={styles.textContainer}>
          <Text style={styles.textBlack}>{cast.name}</Text>
          <Text>{cast.character}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },

  cardContainer: {
    marginTop: 20,
    marginBottom: 30,
  },

  card: {
    height: 70,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
    borderRadius: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },

  textContainer: {
    padding: 15,
  },

  textBlack: {
    fontWeight: 'bold',
    fontSize: 19,
  },
});

export default ActorItem;
