import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  List,
  Product,
  Image,
  ProductTitle,
  ProductPrice,
  CartButton,
  ItemCount,
  ItemCart,
  CartButtonText,
} from './styles';

export default function Main() {
  return (
    <Container>
      <List
        horizontal
        data={[
          {
            title: 'Tênis de Caminhada Leve Confortável',
            img:
              'https://static.netshoes.com.br/produtos/tenis-vr-sneaker-meia-leve/06/E74-0492-006/E74-0492-006_zoom1.jpg',
            price: 'R$179,90',
          },
          {
            title: 'Tênis de Caminhada Leve Confortável',
            img:
              'https://static.netshoes.com.br/produtos/tenis-vr-sneaker-meia-leve/06/E74-0492-006/E74-0492-006_zoom1.jpg',
            price: 'R$179,90',
          },
        ]}
        renderItem={({ item }) => (
          <Product>
            <Image source={{ uri: item.img }} />
            <ProductTitle>{item.title}</ProductTitle>
            <ProductPrice>{item.price}</ProductPrice>
            <CartButton>
              <ItemCart>
                <Icon name="add-shopping-cart" size={20} color="#fff" />
                <ItemCount>3</ItemCount>
              </ItemCart>
              <CartButtonText>ADICIONAR</CartButtonText>
            </CartButton>
          </Product>
        )}
      />
    </Container>
  );
}
