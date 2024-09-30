import { Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

export default function Login() {
    return (
    <View className='justify-center items-center h-full'>
        <Text>Login</Text>
        <Link href='/(main)/placeholder'>Submit</Link>
    </View>
    );
}