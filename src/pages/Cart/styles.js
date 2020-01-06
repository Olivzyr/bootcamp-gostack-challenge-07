import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #191920;
`;

export const List = styled.FlatList.attrs({
  showsHorizontalScrollIndicator: false,
})`
  margin-top: 20px;
`;
