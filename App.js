import 'react-native-gesture-handler';

import { NavigationContainer } from "@react-navigation/native";
import CustomDrawer from "./Drawer";
import { createDrawerNavigator } from '@react-navigation/drawer'

import Home from "./HomeScreen";
import Detail from "./DetailScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <CustomDrawer {...props} />}
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Detail" component={Detail} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}