
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import RootNavigator from './navigation/RootNavigator.jsx';     
import { NavigationContainer } from '@react-navigation/native';
export default function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>

                <StatusBar style="auto" />


                <RootNavigator />


            </NavigationContainer>
        </SafeAreaProvider >
    );
};



