import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { globalActions } from '@src/store/actions';
import { AuthScreens } from '@src/apps/auth/domain/navigation';

const Login: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch()

  const handleLogin = async (): Promise<void> => {
    await globalActions.login(dispatch)
    navigation.navigate(AuthScreens.Register as never);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={{
          backgroundColor: '#5CD321',
          paddingVertical: 15,
          paddingHorizontal: 25,
          borderRadius: 15,
          borderWidth: 1,
          borderColor: 'white',
          elevation: 10,
        }}
        onPress={handleLogin}>
        <Text
          style={{
            color: '#000000',
          }}>
          Login
        </Text>
      </TouchableOpacity>
      {/* <Loading/> */}
    </View>
  );
};

export default Login;
