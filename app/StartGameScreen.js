import React, {useEffect} from 'react'
import {withNavigation} from 'react-navigation'
import { HeaderBackButton } from 'react-navigation-stack';
import { HeaderStyleInterpolators,TransitionPresets } from 'react-navigation-stack';
import { Modal, TextInput, Dimensions, ScrollView, View, Text, Platform, StyleSheet, TouchableOpacity, Switch } from "react-native"

import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { assertIsBroadcastTxSuccess, SigningStargateClient, StargateClient } from "@cosmjs/stargate";

export const DEVICE_WIDTH = Dimensions.get('window').width

const StartGameScreen = ({navigation}) => {

    useEffect( () => {
        _createConnection()
    }, [])

    const _createConnection = async () => {
        console.log("createConnection called")
        const mnemonic = "surround miss nominee dream gap cross assault thank captain prosper drop duty group candy wealth weather scale put";
        const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic);
        console.log('wallet ' + JSON.stringify(wallet))
        const [firstAccount] = await wallet.getAccounts();
        console.log('firstAccount ' + JSON.stringify(firstAccount))

        const rpcEndpoint = "http://rpc.testnet.pylons.tech:26657/";
        const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, wallet);

        console.log('client ' + JSON.stringify(client))
    }
    

    return (
        <View style={styles.container}>
           <Text>Start New Game</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F6F6'
    },
})

StartGameScreen.navigationOptions = ({ navigation }) => ({
    
    headerStyleInterpolator: HeaderStyleInterpolators.forFade,
    headerLeft: (props) => (
        <HeaderBackButton onPress={ () => navigation.navigate('dashboard')}/>
        ),
    })

export default withNavigation(StartGameScreen)