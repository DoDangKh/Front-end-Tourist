import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import Login from './Screen/Login/Login';
import Main from './Screen/Main/Main';
import SignUp from './Screen/SignUp/SignUp';
import Tours from './Screen/Tours/Tours';

const Stack = createStackNavigator();
function App() {
  return (

    <Stack.Navigator
      initialRouteName='Login'
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Tours" component={Tours} />
    </Stack.Navigator>
  )
}

export default () => {
  return (
    <NavigationContainer>
      <App />
      <StatusBar style="auto" />
    </NavigationContainer>
  )
}