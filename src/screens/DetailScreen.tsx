import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, Text, Button} from 'react-native';

const DetailScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Hola desde DetailScreen </Text>
      <Button title="Volver" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default DetailScreen;
