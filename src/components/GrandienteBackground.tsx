import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {GradientContext} from '../context/GradientCotext';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const GrandienteBackground = ({children}: Props) => {
  const {colors} = useContext(GradientContext);

  return (
    <View style={{flex: 1}}>
      <LinearGradient
        colors={[colors.primary, colors.secundary, '#FFFFFf']}
        style={{...StyleSheet.absoluteFillObject}}
        start={{x: 0.1, y: 0.1}}
        // 1 es el 100%. 0.5 es la mitad (50%)
        end={{x: 0.5, y: 0.7}}
      />
      {children}
    </View>
  );
};

export default GrandienteBackground;
