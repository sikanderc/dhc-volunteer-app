import { DrawerNavigator } from 'react-navigation'
import Home from './Home'
import AboutPage from './AboutPage'
import HourLog from './HourLog'
import HourList from './HourList'

const Drawer = DrawerNavigator({
  Home: { screen: Home },
  About: { screen: AboutPage },
  LogHours: { screen: HourLog,
    navigationOptions: {
      title: 'Log Volunteer Hours'
    }
  },
  HourList: { screen: HourList,
    navigationOptions: {
      title: 'View Logged Hours'
    }
  },
})

export default Drawer
