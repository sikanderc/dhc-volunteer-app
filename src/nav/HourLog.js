import React, { Component } from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import DateTimePicker from 'react-native-modal-datetime-picker'
import { fonts, colors } from '../theme'
import Input from '../components/Input'
import moment from 'moment'
import { connect } from 'react-redux'
import { loggingHours } from '../actions'

class HourLog extends Component {
  state = {
    isDatePickerVisible: false,
    isStartTimePickerVisible: false,
    isEndTimePickerVisible: false,
    datePicked: '',
    startTime: '',
    endTime: '',
    eventName: '',
    description: '',
    hours: ''
  }

  onChangeText = (key, value) => {
    this.setState({
      [key]: value
    })
    console.log(this.state);
  }

  _showDatePicker = () => this.setState({ isDatePickerVisible: true })

  _hideDatePicker = () => this.setState({ isDatePickerVisible: false })

  _handleDatePicked = (date) => {
    console.log('A date has been picked: ', date)
    this.setState({
      datePicked: moment(date).format('ddd, MMMM Do, YYYY')
    })
    this._hideDatePicker()
  }

  _showStartTimePicker = () => this.setState({ isStartTimePickerVisible: true })

  _hideStartTimePicker = () => this.setState({ isStartTimePickerVisible: false })

  _handleStartTimePicked = (startTime) => {
    console.log('A start time has been picked: ', startTime)
    this.setState({
      startTime: moment(startTime).format('h:mm a')
    })
    this._hideStartTimePicker()
  }

  _showEndTimePicker = () => this.setState({ isEndTimePickerVisible: true })

  _hideEndTimePicker = () => this.setState({ isEndTimePickerVisible: false })

  _handleEndTimePicked = (endTime) => {
    console.log('A end time has been picked: ', endTime)
    this.setState({
      endTime: moment(endTime).format('h:mm a')
    })
    this._hideEndTimePicker()
  }

  setHours = () => {
    let start = moment.utc(this.state.startTime, "HH:mm")
    let end = moment.utc(this.state.endTime, "HH:mm")
    let d = moment.duration(end.diff(start))
    this.setState({
      hours: moment.utc(+d).format('H:mm')
    })
  }

  onSubmit = () => {
    this.setHours()
    console.log(this.state)
    const { datePicked, startTime, endTime, eventName, description, hours } = this.startTime
    this.props.dispatchLoggingHours( datePicked, startTime, endTime, eventName, description, hours )
  }


  render () {
    const { hourLog: {
      logError,
      logErrorMessage,
      isSubmitting
    } } = this.props
    return (
      <View style={styles.container}>
        <Text style={[styles.text]}>
          Please log your Volunteer hours below.
        </Text>
        <View style={styles.inputContainer}>
          <Input
            placeholder="Event Name"
            type='eventName'
            onChangeText={this.onChangeText}
            value={this.state.eventName}
          />
        </View>
        <TouchableOpacity onPress={this._showDatePicker}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Date of Event</Text>
          </View>
        </TouchableOpacity>
        <DateTimePicker
          isVisible={this.state.isDatePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDatePicker}
        />
        <Text style={styles.text2}>{this.state.datePicked}</Text>
        <TouchableOpacity onPress={this._showStartTimePicker}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Start Time</Text>
          </View>
        </TouchableOpacity>
        <DateTimePicker
          isVisible={this.state.isStartTimePickerVisible}
          onConfirm={this._handleStartTimePicked}
          onCancel={this._hideStartTimePicker}
          mode="time"
        />
        <Text style={styles.text2}>{this.state.startTime}</Text>
        <TouchableOpacity onPress={this._showEndTimePicker}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>End Time</Text>
          </View>
        </TouchableOpacity>
        <DateTimePicker
          isVisible={this.state.isEndTimePickerVisible}
          onConfirm={this._handleEndTimePicked}
          onCancel={this._hideEndTimePicker}
          mode="time"
        />
        <Text style={styles.text2}>{this.state.endTime}</Text>
        <View style={styles.inputContainer}>
          <Input
            placeholder="Description of Work"
            type='description'
            onChangeText={this.onChangeText}
            value={this.state.description}
            multiline={true}
          />
        </View>
        <TouchableOpacity isLoading={isSubmitting} onPress={this.onSubmit}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Submit for Approval</Text>
            <Text style={[styles.errorMessage, logError && { color: 'black' }]}>{logErrorMessage}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapDispatchToProps = {
  dispatchLoggingHours: (datePicked, startTime, endTime, eventName, description, hours) => loggingHours(datePicked, startTime, endTime, eventName, description, hours)
}

const mapStateToProps = state => ({
  hourLog: state.hourLedger
})

export default connect(mapStateToProps, mapDispatchToProps)(HourLog)

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    flexDirection: 'row'
  },
  buttonText: {
    color: colors.primary,
    fontFamily: fonts.light,
    fontSize: 20,
    letterSpacing: 0.5
  },
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 40,
    flex: 1
  },
  text: {
    marginTop: 20,
    fontSize: 24,
    fontFamily: fonts.light
  },
  text2: {
    color: '#666',
    fontSize: 20,
    marginTop: 5,
    fontFamily: fonts.light
  },
  inputContainer: {
    marginTop: 20
  },
  errorMessage: {
    fontSize: 12,
    marginTop: 10,
    color: 'transparent',
    fontFamily: fonts.base
  }
})
