import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {globalActions} from '@src/store/actions';
import {AuthScreens} from '@src/apps/auth/domain/navigation';

const Login: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleLogin = async (): Promise<void> => {
    await globalActions.login(dispatch);
    navigation.navigate(AuthScreens.Register as never);
  };

  return (
    <View className="bg-purple-600 flex-1 items-center justify-center">
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
        <Text className="text-2xl text-gray-500">Tailwind</Text>
      </TouchableOpacity>
      {/* <Loading/> */}
    </View>
  );
};

export default Login;
