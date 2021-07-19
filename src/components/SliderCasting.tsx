import React from 'react';
import {FlatList} from 'react-native';
import ActorItem from './ActorItem';
import {Cast} from '../interfaces/movieCredits';

interface Props {
  cast: Cast[];
}

const SliderCasting = ({cast}: Props) => {
  return (
    <FlatList
      data={cast}
      renderItem={({item}) => <ActorItem cast={item} />}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default SliderCasting;
