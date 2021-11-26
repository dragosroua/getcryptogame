import React from 'react'
import { useEffect, useState } from 'react'
import {withNavigation } from 'react-navigation'
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import Chevron from '../assets/images/chevron_gray.svg'


const DashboardButton = ({ navigation, iconComponent, title, subTitle, onTap }) => {
  
  
  return (
    
    <TouchableOpacity onPress={onTap} style={styles.container}>
        <View style={{flexDirection: 'column', justifyContent: 'center'}}>
          <View style={styles.roundBackground}>
              {iconComponent}
          </View>
        </View>
        <View style={styles.textArea}>
            <Text style={styles.title}>
                {title}
            </Text>
            <Text style={styles.subTitle}>
                {subTitle}
            </Text>
        </View>

        <View style={{flexDirection: 'column', justifyContent: 'center'}}>
          <Chevron width={12} height={12}/>
        </View>

    </TouchableOpacity>  
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignSelf:'center',
    width: '96%',
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5,
    flexDirection: 'row',
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  roundBackground: {
      margin: 10,
      height: 45,
      width: 45,
      borderRadius: 22.5,
      backgroundColor: '#fbf1f1',
      flexDirection: 'column',
      justifyContent: 'center'
  },
  textArea: {
    width: '70%',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  subTitle: {
    fontSize: 12
  },
  logoImage: {
    width: 14,
    height: 15,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
    marginBottom: 15,
  },
  image: {
    width: 45,
    height: 45,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 0,
    borderRadius: 10
  },
})

export default withNavigation(DashboardButton)