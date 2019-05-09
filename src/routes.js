import {
  createAppContainer,
  createBottomTabNavigator,
  createSwitchNavigator,
} from 'react-navigation';

import Main from '~/pages/Main';
import Instagram from '~/pages/Instagram';

// const Routes = createAppContainer(createSwitchNavigator({ Main }));

const Routes = createBottomTabNavigator({
  Loja: Main,
  Instagram,
});

export default createAppContainer(Routes);
