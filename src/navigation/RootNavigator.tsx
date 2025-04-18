import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabNavigator from './TabNavigator';
import HistoryListScreen from '../screens/History/HistoryListScreen';
import JourneyDetailScreen from '../screens/History/JourneyDetailScreen';
import SettingsScreen from '../screens/Home/SettingsScreen';

import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Tabs" component={TabNavigator} />
          <Stack.Screen name="JourneyDetails" component={JourneyDetailScreen}
          />
          <Stack.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              headerShown: true,
              title: '系统设置',
              headerBackTitle: '返回'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}