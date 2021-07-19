import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import {RootStackParams} from '../stack/Navigation';

import Icon from 'react-native-vector-icons/Ionicons';
import DetailsComponent from '../components/DetailsComponent';
import SliderCasting from '../components/SliderCasting';
import {movieCredits} from '../hooks/useMovieCredits';
import {ActivityIndicator} from 'react-native';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

const screenHeight = Dimensions.get('screen').height;

const DetailScreen = ({route}: Props) => {
  const movie = route.params;

  const {loading, cast, movieFull} = movieCredits(movie.id);

  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <ScrollView>
      <View style={styles.containerCard}>
        <Image style={styles.image} source={{uri}} />
      </View>

      <View style={{paddingHorizontal: 25}}>
        {/* Title and subtitle on English */}
        <View>
          <Text style={styles.textGray}>{movie.original_title}</Text>
          {/* Title on Spanish */}
          <Text style={styles.textBlack}>{movie.title}</Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          {/* Valuation */}
          <Icon
            name="star-outline"
            size={20}
            color="black"
            style={{marginRight: 5}}
          />
          <Text style={styles.textGray}>{movie.vote_average}.-</Text>
          {/* <Text>{movie.}</Text> */}
        </View>

        {loading ? (
          <View style={{flex: 1, justifyContent: 'center'}}>
            <ActivityIndicator color="red" size={80} />
          </View>
        ) : (
          <DetailsComponent movieFull={movieFull!} cast={cast} />
        )}
      </View>
    </ScrollView>
  );
};

export const styles = StyleSheet.create({
  image: {
    width: '100%',
    // Nos da el 70% de la pantalla
    height: screenHeight * 0.7,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },

  containerCard: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 7,

    elevation: 16,

    borderRadius: 25,
    marginBottom: 25,
  },

  textGray: {
    fontSize: 17,
    color: '#000000',
    opacity: 0.8,
  },

  textBlack: {
    fontWeight: 'bold',
    fontSize: 27,
    color: '#000000',
  },

  overview: {
    color: '#000000',
    fontSize: 17,
  },
});

export default DetailScreen;
