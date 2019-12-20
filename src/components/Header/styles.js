import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
  flex-direction: row;
  background: #141419;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
  height: 64px;
`;

export const Logo = styled.TouchableOpacity`
  width: 185px;
  height: 24px;
`;

export const LogoImg = styled.Image`
  width: 185px;
  height: 24px;
`;

export const Cart = styled.TouchableOpacity`
  flex: 1;
  align-items: flex-end;
  align-content: center;
  padding: 30px 20px 38px;
`;

export const Item = styled.Text`
  margin-bottom: -10px;
  right: -6px;
  font-size: 12px;
  background: ${colors.primary};
  padding: 0px 8px;
  border-radius: 8px;
  color: #fff;
  overflow: hidden;
`;
