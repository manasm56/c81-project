import react from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import TabNavigator from './tabnavigator'
import Profile from '../screens/profile'

const Drawer = createDrawerNavigator()

const DraweNavigator = () => {
  return (
    <Drawer.Navigator>
<Drawer.Screen name="Home" component={TabNavigator}/>
<Drawer.Screen name="Profile" component={Profile}/>
    
    </Drawer.Navigator>
  )
}

export default DraweNavigator