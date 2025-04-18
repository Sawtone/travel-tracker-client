import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

type ErrorViewProps = {
    message?: string;
    icon?: string;
    color?: string;
  };

const ErrorView = ({
    message = 'Error',
    icon = 'warning',
    color = '#dc2626',
  }: ErrorViewProps) => (
    <View style={styles.container}>
      <Ionicons name={icon} size={32} color={color} />
      <Text style={[ styles.text, { color } ]}>{message}</Text>
    </View>
  )

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginTop: 12,
    textAlign: 'center',
  },
});

export default ErrorView;