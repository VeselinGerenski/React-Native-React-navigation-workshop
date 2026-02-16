import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigator from './HomeNavigator.jsx';
import CartScreen from '../screens/CartScreen.jsx';
import { Text } from 'react-native';

export default function RootNavigator() {

    const Tabs = createBottomTabNavigator();

    return (

        <Tabs.Navigator ScreenOptions={{ tabBarPosition: 'bottom' }}>
            <Tabs.Screen name="HomeTab" component={HomeNavigator} />
            <Tabs.Screen name="Cart" component={CartScreen} />
            <Tabs.Screen name="Info" component={() => <Text>Info Screen</Text>} />
        </Tabs.Navigator>

    )
};