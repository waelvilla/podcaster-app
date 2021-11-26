import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../../constants/Colors'
import useColorScheme from '../../hooks/useColorScheme'


const Home = () => {
    const theme = Colors[useColorScheme()];

    return (
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            <Text style={{fontSize: 30, color: 'white'}}>Home sweet home</Text>
        </View>
    )
}

export default Home
