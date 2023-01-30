import axios from 'axios';
import {CryptoProps} from '../../shared/types';
import {COIN_GECKO_API_URL} from './constants';
import {GeckoCryptoData} from './types';

export async function fetchCryptos(): Promise<CryptoProps[] | null> {
  let response = null;

  try {
    response = await axios.get<GeckoCryptoData[]>(COIN_GECKO_API_URL);
  } catch (error) {
    console.log(error);
    return null;
  }

  const data = response.data;

  return data.map(item => ({
    id: item.id,
    price: item.current_price,
    symbol: item.symbol,
    name: item.name,
    image: item.image,
  }));
}
