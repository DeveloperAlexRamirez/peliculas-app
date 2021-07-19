import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const GrandienteBackground = ({children}: Props) => {
  return (
    <View style={{flex: 1}}>
      <LinearGradient
        colors={['#1d3f5a', '#15ab92', '#FFFFFf']}
        style={{...StyleSheet.absoluteFillObject}}
        start={{x: 0.1, y: 0.1}}
        // 1 es el 100%. 0.5 es la mitad
        end={{x: 0.5, y: 0.7}}
      />
      {children}
    </View>
  );
};

export default GrandienteBackground;
