import React from 'react';
import {CryptoPrice} from './src/contexts/CryptoPrice';
import MainNavigator from './src/Navigators/MainNavigator';

export default function App() {
  return (
    <CryptoPrice>
      <MainNavigator />
    </CryptoPrice>
  );
}
