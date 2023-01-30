import {Image} from 'react-native';
import {RowView} from '../../shared/styles';
import {CryptoProps} from '../../shared/types';
import {formatMoney} from '../../shared/utils';
import {Container, Price, Symbol} from './styles';

export default function CryptoItem({symbol, price, image}: CryptoProps) {
  return (
    <Container>
      <RowView>
        <Image
          source={{
            uri: image,
            width: 25,
            height: 25,
          }}
        />
        <Symbol>{symbol}</Symbol>
      </RowView>
      <Price>{formatMoney(price)}</Price>
    </Container>
  );
}
