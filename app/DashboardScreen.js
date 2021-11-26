import React from 'react'

import {withNavigation} from 'react-navigation'
import { HeaderBackButton } from 'react-navigation-stack';
import { Dimensions, Modal, View, Text, Platform, StyleSheet, TouchableOpacity, PermissionsAndroid } from "react-native"

import DashboardButton from './components/DashboardButton'
import GameLogo from './assets/images/game-logo.svg'

export const DEVICE_WIDTH = Dimensions.get('window').width


const DashboardScreen = ({navigation}) => {

    return (
        <View style={styles.container}>
            <DashboardButton iconComponent={<GameLogo width={15} height={15} style={{alignSelf: 'center'}}/>} title='Start New Game' subTitle='Start a new Crypto Game' onTap={() => navigation.navigate('startNewGame')}/>
            <DashboardButton iconComponent={<GameLogo width={15} height={15} style={{alignSelf: 'center'}}/>} title='Game History' subTitle='Crypto Game History' onTap={() => navigation.navigate('history')}/>
        </View>
        
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#f6f6f6',
        paddingBottom: 7
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 20,
        marginLeft: 20,
        },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 5,
        paddingTop: 35,
        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
        },
    roundBackground: {
        margin: 10,
        marginLeft: 0,
        height: 45,
        width: 45,
        borderRadius: 22.5,
        backgroundColor: '#c50300',
        flexDirection: 'column',
        justifyContent: 'center'
    },
})

export default withNavigation(DashboardScreen)