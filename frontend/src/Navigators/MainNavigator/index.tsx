import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Quotation from '../../screens/Quotation';
import CryptoDetail from '../../screens/CryptoDetail';

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Criptos" component={Quotation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
