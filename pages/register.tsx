/// <reference types="nativewind/types" />
import { NavigationProp, RouteProp } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, Modal, SafeAreaView, ScrollView, Switch } from 'react-native';

type Props = {
    navigation: any;
    route: any;
}

const Register = ({ navigation }: Props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [agreeToTerms, setAgreeToTerms] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const onValueChange = (value: boolean) => {
        setAgreeToTerms(value);
    }

    const handleRegister = () => {
        // Handle user registration here
    };

    return (
        <SafeAreaView className="flex-1 px-5 py-5 mt-12">
            <ScrollView className="flex-1">
                <View className="flex-1 items-center justify-center bg-white">
                <Image source={require('./../assets/icon.png')} className="w-32 h-32 mb-8" />
                <TextInput
                    placeholder="First Name"
                    value={firstName}
                    onChangeText={setFirstName}
                    className="w-full p-4 mb-4 rounded-md border border-gray-300"
                />
                <TextInput
                    placeholder="Last Name"
                    value={lastName}
                    onChangeText={setLastName}
                    className="w-full p-4 mb-4 rounded-md border border-gray-300"
                />
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    className="w-full p-4 mb-4 rounded-md border border-gray-300"
                />
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                    className="w-full p-4 mb-4 rounded-md border border-gray-300"
                />
                <TextInput
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry={true}
                    className="w-full p-4 mb-4 rounded-md border border-gray-300"
                />
                <View className="w-full flex-row mb-4 items-center justify-center">
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <Text className="text-blue-600">Terms and conditions</Text>
                    </TouchableOpacity>
                    <Modal animationType="slide" visible={modalVisible}>
                    <View className="flex-1 items-center justify-center bg-white p-4">
                        <Text className="text-lg font-bold mb-4">Terms and Conditions</Text>
                        <ScrollView className="max-height: 300px">
                            <Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor,
                                dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
                                ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie,
                                enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque
                                vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat liberolaoreet morbi auctor lorem vitae tortor. Curabitur nisi. Quisque malesuada placerat nisl. Nam ipsum
                                risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Sed augue ipsum, egestas nec, vestibulum et,
                                malesuada adipiscing, dui. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae
                                euismod ligula urna in dolor. Mauris sollicitudin fermentum libero. Praesent nonummy mi in odio. Nunc
                                interdum lacus sit amet orci. Vestibulum rutrum, mi nec elementum vehicula, eros quam gravida nisl, id
                                fringilla neque ante vel mi. Morbi mollis tellus ac sapien. Phasellus volutpat, metus eget egestas
                                mollis, lacus lacus blandit dui, id egestas quam mauris ut lacus. Fusce vel dui. Sed in libero ut nibh
                                placerat accumsan.
                            </Text>
                        </ScrollView>
                        <TouchableOpacity
                        onPress={() => {
                            setModalVisible(false);
                            setAgreeToTerms(true);
                        }}
                        className="mt-4 p-4 bg-blue-600 rounded-md"
                        >
                        <Text className="text-white">Agree</Text>
                        </TouchableOpacity>
                </View>
                </Modal>

            </View>
            <TouchableOpacity
                onPress={() => {
                if (!agreeToTerms) {
                    alert('Please agree to the terms and conditions');
                } else {
                    alert('Registration successful');
                }
                }}
                className="w-full p-4 bg-blue-600 rounded-md"
            >
                <Text className="text-white text-center">Register</Text>
            </TouchableOpacity>
            </View>
            <View className="w-full flex-row mb-4 items-center justify-center mt-3">
                <TouchableOpacity onPress={() => navigation.replace('Login')}>
                    <Text className="text-blue-600"> Already have an account? Login</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </SafeAreaView>
    );

};

export default Register;

