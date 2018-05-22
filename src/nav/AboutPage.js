import React, { Component } from 'react'
import { StyleSheet, View, Button, Alert, Text, Image, Linking } from 'react-native'
import { fonts, colors } from '../theme'


export default class AboutPage extends Component {
  render() {

    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require('../assets/DHC-logo-blue.png')} resizeMode="contain" />
        <Text style={styles.text1}>
          Doctors for Healthy Communities strives to ensure that all have equal access to the tools for success.
        </Text>
        <Text style={styles.text2}>
          Visit us at
        </Text>
        <Text style={styles.text2link} onPress={() => Linking.openURL('http://dhcus.org')}>
          dhcus.org
        </Text>
        <Text style={styles.text3}>
          © Doctors for Healthy Communities 2018
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    padding: 30,
    flex: 2,
    width: 150,
    height: 80
  },
  text1: {
    flex: 2,
    fontSize: 20,
    padding: 20,
    textAlign: "center",
    color: 'rgba(0, 0, 0, .85)',
    fontFamily: fonts.base
  },
  text2: {
    fontSize: 18,
    textAlign: "center",
    color: colors.primary,
    fontFamily: fonts.bold
  },
  text2link: {
    fontSize: 18,
    padding: 10,
    textAlign: "center",
    color: colors.secondary,
    fontFamily: fonts.bold
  },
  text3: {
    textAlign: "center",
    padding: 20,
    fontFamily: fonts.base
  },
  button: {
    flex: 2,
    padding: 10
  },
  input: {
    height: 50,
    backgroundColor: '#ededed',
    marginVertical: 10
  }
})
