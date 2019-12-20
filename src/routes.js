import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Cart from './pages/Cart';

import Header from './components/Header';

import colors from './styles/colors';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      Cart,
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: navigation => ({
        header: <Header {...navigation} />,
        headerStyle: {
          backgroundColor: colors.headerDarkColor,
        },
        cardStyle: {
          backgroundColor: colors.dark,
        },
        headerTintColor: '#FFF',
        background: colors.backgroundPrimaryColor,
      }),
    }
  )
);

export default Routes;
