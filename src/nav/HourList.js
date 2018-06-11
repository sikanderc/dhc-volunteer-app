import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import Row from '../components/Row';
import ListHeader from '../components/ListHeader';
import { Auth, API, Storage } from 'aws-amplify'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
});

class HourList extends React.Component {
  state = {
    apiResponse: null,
    hourLogId: '',
    userId: ''
   };

   apiGetHours = async () => {
     return await API.get('HourLoggersCRUD', '/HourLoggers/:hourLogId')
   }

  async getSample() {
    this.apiGetHours()
    .then(apiResponse => {
      console.log(apiResponse)
      this.setState({ apiResponse })
    })
  }

  render() {
    return (
      <View>
         <Button title="Send Request" onPress={this.getSample.bind(this)} />
         <Text>Response: {this.state.apiResponse && JSON.stringify(this.state.apiResponse)}</Text>
      </View>
    );
  }
}

export default HourList;
