import React from 'react'
import {withNavigation} from 'react-navigation'
import { HeaderBackButton } from 'react-navigation-stack';
import { HeaderStyleInterpolators,TransitionPresets } from 'react-navigation-stack';
import { Modal, TextInput, Dimensions, ScrollView, View, Text, Platform, StyleSheet, TouchableOpacity, Switch } from "react-native"

export const DEVICE_WIDTH = Dimensions.get('window').width

const HistoryScreen = ({navigation}) => {


    return (
        <View style={styles.container}>
           <Text>Game history</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F6F6'
    },
})

HistoryScreen.navigationOptions = ({ navigation }) => ({
    
    headerStyleInterpolator: HeaderStyleInterpolators.forFade,
    headerLeft: (props) => (
        <HeaderBackButton onPress={ () => navigation.navigate('dashboard')}/>
        ),
    })

export default withNavigation(HistoryScreen)