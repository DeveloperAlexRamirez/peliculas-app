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

import DetailsComponent from '../components/DetailsComponent';
import {movieCredits} from '../hooks/useMovieCredits';
import Loading from '../components/Loading';

import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native';
interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

const screenHeight = Dimensions.get('screen').height;

const DetailScreen = ({route, navigation}: Props) => {
  const movie = route.params;

  const {loading, cast, movieFull} = movieCredits(movie.id);

  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <ScrollView>
      <View style={styles.containerCard}>
        <View style={styles.imageBorder}>
          <Image style={styles.image} source={{uri}} />
        </View>
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
          <Text style={styles.textGray}>
            {movieFull?.genres.map(g => g.name).join(', ')}
          </Text>
        </View>

        {loading ? (
          <Loading />
        ) : (
          <DetailsComponent movieFull={movieFull!} cast={cast} />
        )}
      </View>

      <View style={styles.backBtn}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-circle-outline" size={70} color="white" />
        </TouchableOpacity>
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

  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },

  containerCard: {
    width: '100%',
    height: screenHeight * 0.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,

    elevation: 9,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
    marginBottom: 20,
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

  backBtn: {
    position: 'absolute',
    zIndex: 999,
    elevation: 9,
    top: 10,
    left: 5,
  },
});

export default DetailScreen;
