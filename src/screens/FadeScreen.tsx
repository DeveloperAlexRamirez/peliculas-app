import React from 'react';
import {View, Button, Animated} from 'react-native';
import {useFade} from '../hooks/useFade';

const FadeScreen = () => {
  const {fadeIn, fadeOut, opacity} = useFade();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'purple',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Animated.View
        style={{
          backgroundColor: 'orange',
          width: 150,
          height: 150,
          borderColor: 'white',
          borderWidth: 10,
          marginBottom: 10,
          opacity,
        }}
      />
      <Button onPress={fadeIn} title="fadeIn" />
      <Button onPress={fadeOut} title="fadeOut" />
    </View>
  );
};

export default FadeScreen;
