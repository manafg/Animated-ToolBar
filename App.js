import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {FontAwesome5} from '@expo/vector-icons'

import {JournalScreen, MeasuresScreen, TreatmentScreen, ProfileScreen} from './Screens/index';
import AddButton from './Comp/AddButton'

const TabBarNavigator = createBottomTabNavigator({
  JournalScreen:{
    screen: JournalScreen,
    navigationOptions:{
      tabBarIcon: ()=> <FontAwesome5 name="book-medical" size={24} color="#CDCCCE" />
    }
  },
  ProfileScreen:{
    screen: ProfileScreen,
    navigationOptions:{
      tabBarIcon: ()=> <FontAwesome5 name="user" size={24} color="#CDCCCE" />
    }
  },
  AddScreen:{
    screen: MeasuresScreen,
    navigationOptions:{
      tabBarIcon: ()=> <AddButton/>
    }
  },
  MeasuresScreen:{
    screen: MeasuresScreen,
    navigationOptions:{
      tabBarIcon: ()=> <FontAwesome5 name="heartbeat" size={24} color="#CDCCCE" />
    }
  },
  TreatmentScreen:{
    screen: TreatmentScreen,
    navigationOptions:{
      tabBarIcon: ()=> <FontAwesome5 name="user" size={24} color="#CDCCCE" />
    }
  }
},{
  tabBarOptions:{
    showLabel: false
  }
})
 export default createAppContainer(TabBarNavigator)