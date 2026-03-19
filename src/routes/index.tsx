import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@react-native-vector-icons/ant-design';
import { HomeScreen } from '../pages/home/index';
import { ListScreen } from '../pages/list/index';
import { MapScreen } from '../pages/map/index';
import { ScanCodeScreen } from '../pages/scan-code/index';

// 各个页面的params
export type RootStackParams = {
  Home?: Record<string, any>;
  List?: Record<string, any>;
  Map?: Record<string, any>;
  TabPage?: Record<string, any>;
  ScanCode?: Record<string, any>;
};

// 带有底部tab的页面
const TabPage = createBottomTabNavigator({
  screenOptions: {
    headerTitleAlign: 'center',
  },
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        title: 'home page',
        tabBarIcon: ({ focused, color, size }) => {
          return <AntDesign name="home" color={color} size={size} />;
        },
      },
    },
    List: {
      screen: ListScreen,
      options: {
        title: 'list page',
        tabBarIcon: ({ color, size }) => {
          return <AntDesign name="ordered-list" color={color} size={size} />;
        },
      },
    },
    Map: {
      screen: MapScreen,
      options: {
        title: 'scan page',
        tabBarIcon: ({ color, size }) => {
          return <AntDesign name="scan" color={color} size={size} />;
        },
      },
    },
  },
});

// root级别的路由
export const RootStack = createNativeStackNavigator({
  initialRouteName: 'TabPage',
  screenOptions: {
    headerTitleAlign: 'center',
  },
  screens: {
    TabPage: {
      screen: TabPage,
      options: {
        headerShown: false,
      },
    },
    ScanCode: {
      screen: ScanCodeScreen,
      options: {
        title: '扫码页面',
      },
    },
  },
});
