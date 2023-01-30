import React, {useMemo, useState} from 'react';
import {FlatList, Image, ImageBackground, StatusBar} from 'react-native';
import CryptoItem from '../../components/CryptoListItem';
import SearchInput from '../../components/SearchInput';
import {useCryptoPrices} from '../../contexts/CryptoPrice/hook';
import {Screen} from '../../shared/styles';

export default function Quotation() {
  const cryptoPrices = useCryptoPrices();
  const [FilterText, setFilterText] = useState('');

  const handleFilter = (text: string) => {
    setFilterText(text);
  };

  const filteredCryptos = useMemo(() => {
    if (FilterText === '') return cryptoPrices;

    return cryptoPrices.filter(crypto => {
      const symbol = crypto.symbol.toLowerCase();
      const name = crypto.name?.toLowerCase();
      const text = FilterText.toLowerCase();

      return symbol.includes(text) || (name && name.includes(text));
    });
  }, [FilterText, cryptoPrices]);

  return (
    <Screen>
      <Image
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
        }}
        source={require('../../assets/images/quotationBackground.png')}
        resizeMode="cover"
      />
      <FlatList
        data={filteredCryptos}
        contentContainerStyle={{gap: 10}}
        renderItem={({item}) => (
          <CryptoItem
            id={item.id}
            symbol={item.symbol}
            price={item.price}
            image={item.image}
          />
        )}
      />
      <SearchInput inputValue={FilterText} onChange={handleFilter} />
    </Screen>
  );
}
