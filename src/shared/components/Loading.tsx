import {View, Text} from 'react-native';
import React from 'react';
import {ActivityIndicator} from 'react-native';

const Loading = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ActivityIndicator size={50} color="gray" />
    </View>
  );
};

export default Loading;
