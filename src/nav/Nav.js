import React from 'react'
import { StackNavigator } from 'react-navigation'

import Drawer from './Drawer'
import { Button, StyleSheet, Text } from 'react-native'
import { Auth } from 'aws-amplify'
import { fonts, colors } from '../theme'


const styles = StyleSheet.create({
  headerTitle: {
    fontFamily: fonts.base,
    color: '#666',
    marginBottom: 10,
    fontSize: 18,
    textAlign: 'center'
  }
})

const routeConfig = {
  Drawer: {
    screen: Drawer,
    navigationOptions: ({navigation}) => ({
      headerLeft: <Button title='Menu' color="rgba(0, 0, 0, .85)" onPress={() => navigation.navigate('DrawerToggle')} />,
      headerStyle: {
        backgroundColor: "lightpink",
      },
      headerTintColor: '#68cded',
      headerTitle: <Text style={styles.headerTitle}>Logged in:{'\n'}{Auth.user.username}</Text>
    })
  }
}

const StackNav = StackNavigator(routeConfig)

class Nav extends React.Component {
  render() {
    return (
      <StackNav />
    )
  }
}

export default StackNav
