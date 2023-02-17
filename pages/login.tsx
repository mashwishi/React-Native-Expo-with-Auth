/// <reference types="nativewind/types" />
import { NavigationProp, RouteProp } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image } from 'react-native';

type Props = {
  navigation: any;
  route: any;
}

const Login = ({ navigation }: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = () => {
    // TODO: Handle login logic
  };

  return (
    <View className="flex-1">
      <View className="flex-1 justify-center items-center">
        <Image
          source={require('./../assets/icon.png')}
          style={{ width: 200, height: 200, resizeMode: 'contain' }}
        />
      </View>
      <View className="flex-1 justify-center items-center">
        <View className="w-4/5">
          <Text className="text-2xl font-bold text-center mb-6">Login</Text>
          <TextInput
            className="border-2 border-gray-300 p-2 mb-4"
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
          />
          <TextInput
            className="border-2 border-gray-300 p-2 mb-4"
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TouchableOpacity
            className="bg-blue-500 py-2 px-4 rounded"
            onPress={handleLogin}
          >
            <Text className="text-white font-bold text-center">Login</Text>
          </TouchableOpacity>
          <View className="w-full flex-row mb-4 items-center justify-center mt-2">
                <TouchableOpacity onPress={() => navigation.replace('Register')}>
                    <Text className="text-blue-600"> Don't have an account?</Text>
                </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
  
};

export default Login;

