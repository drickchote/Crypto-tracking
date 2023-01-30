import {useContext} from 'react';
import {CryptoPriceContext} from '.';

export function useCryptoPrices() {
  return useContext(CryptoPriceContext);
}
