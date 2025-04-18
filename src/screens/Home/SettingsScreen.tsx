import React from 'react';
import { Text, View, StyleSheet, Switch } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { OptionItem } from './HomeScreen';

const SettingsScreen = () => {
  const [settings, setSettings] = React.useState({
    darkMode: false,
    wifiOnly: true,
    notifications: true,
    biometrics: false
  });

  return (
    <View style={styles.container}>
      <OptionItem 
        icon="person-outline" 
        label="账户与安全"
        rightElement={<Ionicons name="chevron-forward" size={20} color="#999" />}
      />
      
      <OptionItem 
        icon="notifications-outline" 
        label="通知设置"
        rightElement={
          <Switch 
            value={settings.notifications}
            onValueChange={v => setSettings({...settings, notifications: v})}
          />
        }
      />

      <OptionItem 
        icon="cloud-download-outline" 
        label="存储管理"
        rightElement={<Text style={styles.sizeText}>已用 1.2GB/5GB</Text>}
      />

      <OptionItem 
        icon="information-circle-outline" 
        label="关于我们"
        rightElement={<Text style={styles.versionText}>v2.4.1</Text>}
      />

      <OptionItem 
        icon="help-circle-outline" 
        label="帮助与反馈"
        rightElement={<Ionicons name="chevron-forward" size={20} color="#999" />}
      />

      <OptionItem 
        icon="shield-checkmark-outline" 
        label="隐私政策"
        rightElement={<Ionicons name="chevron-forward" size={20} color="#999" />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16
  },
  sizeText: {
    color: '#666',
    fontSize: 14
  },
  versionText: {
    color: '#999',
    fontSize: 14
  }
});

export default SettingsScreen;