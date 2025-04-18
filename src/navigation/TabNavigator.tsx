import React from 'react';
import { View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MapScreen from '../screens/Map/MapScreen';
import HistoryListScreen from '../screens/History/HistoryListScreen';
import JourneyDetailScreen from '../screens/History/JourneyDetailScreen';
import HomeScreen from '../screens/Home/HomeScreen';

import { TabParamList } from './types';

const Tab = createBottomTabNavigator<TabParamList>();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
                  backgroundColor: '#fff',
                  borderTopWidth: 1,
                  borderTopColor: '#e5e5e5',
                },
        tabBarActiveTintColor: '#2563eb',
        tabBarIcon: ({ color, size }) => {
                  let iconName: string;

                  switch (route.name) {
                    case 'Home':
                      iconName = 'home';
                      break;
                    case 'Map':
                      iconName = 'map';
                      break;
                    case 'History':
                      iconName = 'time';
                      break;
                    default:
                      iconName = 'ellipse';
                  }

                  return <Ionicons name={iconName} size={size} color={color} />;
                },
      })}
    >
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="History" component={HistoryListScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
  );
};

export default Tabs;
