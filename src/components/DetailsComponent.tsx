import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../screens/DetailScreen';
import {MovieFull} from '../interfaces/movieInterface';
import SliderCasting from './SliderCasting';
import {Cast} from '../interfaces/movieCredits';

import currency from 'currency-formatter';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

const DetailsComponent = ({movieFull, cast}: Props) => {
  return (
    <View>
      {/* Overview */}
      <Text style={styles.textBlack}>Historia</Text>
      <Text style={styles.overview}>{movieFull.overview}</Text>

      <Text style={styles.textBlack}>Presupuesto</Text>
      <Text style={styles.textGray}>
        {currency.format(movieFull.budget, {code: 'USD'})}
      </Text>

      <SliderCasting cast={cast} />
    </View>
  );
};

export default DetailsComponent;

// TODO: Queda pendiente lo de la categoria de peliculas
