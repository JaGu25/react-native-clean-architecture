import {Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import { GlobalState } from 'src/store/reducer';

const Register = () => {
  const user = useSelector((state: GlobalState) => state.global.user);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>{JSON.stringify(user, null, 4)}</Text>
    </View>
  );
};

export default Register;
