import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/stack/Navigation';
import {StatusBar} from 'react-native';
import FadeScreen from './src/screens/FadeScreen';
import {GradientProvider} from './src/context/GradientCotext';

const App = () => {
  const AppState = ({children}: any) => {
    return <GradientProvider>{children}</GradientProvider>;
  };

  return (
    <NavigationContainer>
      <AppState>
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <Navigation />
        {/* <FadeScreen /> */}
      </AppState>
    </NavigationContainer>
  );
};

export default App;
