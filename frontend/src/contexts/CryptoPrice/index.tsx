import React, {
  createContext,
  createRef,
  useEffect,
  useRef,
  useState,
} from 'react';
import {fetchCryptos} from '../../infra/CoinGecko/api';
import {CryptoProps} from '../../shared/types';

export const CryptoPriceContext = createContext([] as CryptoProps[]);

interface CryptoPriceProps {
  children: React.ReactElement;
}

export function CryptoPrice({children}: CryptoPriceProps) {
  const [cryptos, setCryptos] = useState([] as CryptoProps[]);
  let interval = useRef<number>();

  useEffect(() => {
    interval.current = setInterval(updateCryptos, 10000);
  }, []);

  async function updateCryptos() {
    const fetchedCryptos = await fetchCryptos();
    if (fetchedCryptos) {
      setCryptos(fetchedCryptos);
    } else {
      console.log('Too many requests!');
      if (interval.current) {
        clearInterval(interval.current);
        console.log('Waiting 60 seconds...');
        setTimeout(() => {
          interval.current = setInterval(updateCryptos, 10000);
        }, 1000 * 60);
      }
    }
  }

  return (
    <CryptoPriceContext.Provider value={cryptos}>
      {children}
    </CryptoPriceContext.Provider>
  );
}
