import React from 'react';
import {View, ActivityIndicator} from 'react-native';

const Loading = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <ActivityIndicator size={80} color="red" />
    </View>
  );
};

export default Loading;
