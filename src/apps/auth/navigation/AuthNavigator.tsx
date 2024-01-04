import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login/Login';
import Register from '../screens/Register/Register';
import { AuthScreens } from '../domain/navigation';

const Stack = createStackNavigator();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={AuthScreens.Login} component={Login} />
      <Stack.Screen name={AuthScreens.Register} component={Register} />
    </Stack.Navigator>
  );
};
