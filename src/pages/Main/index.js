import React from 'react';

import {
  Container,
  List,
  Product,
  Image,
  Title,
  Price,
  CartButton,
  CartButtonText,
} from './styles';

export default function Main() {
  return (
    <Container>
      <List
        renderItem={
          <Product>
            <Image source="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg" />
            <Title>Tênis de Caminhada Leve Confortável</Title>
            <Price>179.90</Price>

            <CartButton>
              <CartButtonText>Adicionar</CartButtonText>
            </CartButton>
          </Product>
        }
      />
    </Container>
  );
}
