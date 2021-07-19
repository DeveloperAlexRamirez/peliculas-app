import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/stack/Navigation';
import {StatusBar} from 'react-native';
import FadeScreen from './src/screens/FadeScreen';

const App = () => {
  return (
    <NavigationContainer>
      {/* Cambiar a color negro la barra de tareas */}
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <Navigation />
      {/* <FadeScreen /> */}
    </NavigationContainer>
  );
};

export default App;
