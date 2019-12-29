import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, List, Product, CartButton } from './styles';

export default function Main() {
  return (
    <Container>
      <List>
        <Product>
          <CartButton>
            <Icon name="add-shopping-cart" size={20} color="#fff" />
          </CartButton>
        </Product>
      </List>
    </Container>
  );
}
