import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../pages/home/index';
import { ListScreen } from '../pages/list/index';
import { MapScreen } from '../pages/map/index';

export type RootStackParams = {
  Home?: Record<string, any>;
  List?: Record<string, any>;
  Map?: Record<string, any>;
};

export const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        title: 'home page',
      },
    },
    List: ListScreen,
    Map: MapScreen,
  },
});
