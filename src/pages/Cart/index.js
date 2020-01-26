import React from 'react';

// import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, List } from './styles';

export default function Cart() {
  return (
    <Container>
      <List
        horizontal
        data={[
          {
            image: '',
            title: '',
            price: '',
            productTotalPrice: '',
          },
        ]}
      />
    </Container>
  );
}
