import React from 'react';
import {
  createAppContainer,
  createBottomTabNavigator,
  createSwitchNavigator,
} from 'react-navigation';

/* Imports */
import Ionicons from 'react-native-vector-icons/FontAwesome';

/* Rotas */
import Main from '~/pages/Main';
import Instagram from '~/pages/Instagram';

const Routes = createBottomTabNavigator(
  {
    Loja: Main,
    Instagram,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        const IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Loja') {
          iconName = 'shopping-bag';
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
          // IconComponent = HomeIconWithBadge;
        } else if (routeName === 'Instagram') {
          iconName = 'instagram';
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={18} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  },
);

export default createAppContainer(Routes);
