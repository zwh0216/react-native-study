/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { createStaticNavigation } from '@react-navigation/native';
import { RootStack } from './src/routes/index';

const Navignation = createStaticNavigation(RootStack);

function App() {
  return <Navignation></Navignation>;
}

export default App;
