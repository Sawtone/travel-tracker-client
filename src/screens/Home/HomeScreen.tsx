import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Switch } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import SettingsScreen from './SettingsScreen';

import { RootStackNavigation } from '../../navigation/types';

const HomeScreen = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const navigation = useNavigation<RootStackNavigation>();

  const stats = {
    totalDistance: '256.8 公里',
    journeys: '89 次',
    notes: '128 篇',
    favorites: '64 个'
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        <Image 
          source={{ uri: 'https://www.4kpic.cn/upload/thumbnails/2024/5/24/20240524175302510917.webp' }}
          style={styles.avatar}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>旅行修勾</Text>
          <View style={styles.achievement}>
            <Ionicons name="trophy" size={20} color="#FFD700" />
            <Text style={styles.achievementText}>金牌探险家</Text>
          </View>
        </View>
      </View>

      <View style={styles.statsCard}>
        <StatItem icon="map-outline" value={stats.totalDistance} label="总里程" />
        <StatItem icon="wallet-outline" value={stats.journeys} label="旅程数" />
        <StatItem icon="document-text-outline" value={stats.notes} label="随手记" />
        <StatItem icon="heart-outline" value={stats.favorites} label="收藏" />
      </View>

      <View style={styles.settingsSection}>
        <OptionItem 
          icon="moon-outline" 
          label="深色模式"
          rightElement={<Switch value={isDarkMode} onValueChange={setIsDarkMode} />}
        />
        <OptionItem
          icon="heart-outline"
          label="收藏地点管理"
          rightElement={<Ionicons name="chevron-forward" size={20} color="#999" />}
        />
        <OptionItem
          icon="folder-outline"
          label="随手记仓库"
          rightElement={<Ionicons name="chevron-forward" size={20} color="#999" />}
        />
        <OptionItem 
          icon="settings-outline" 
          label="设置" 
          onPress={() => navigation.navigate('Settings')}
          rightElement={<Ionicons name="chevron-forward" size={20} color="#999" />}
          />
        <OptionItem
          icon="medal-outline"
          label="成就系统"
          rightElement={<Ionicons name="chevron-forward" size={20} color="#999" />}
        />
      </View>
    </View>
  );
};

const StatItem = ({ icon, value, label }: any) => (
  <View style={styles.statItem}>
    <Ionicons name={icon} size={24} color="#2563eb" />
    <Text style={styles.statValue}>{value}</Text>
    <Text style={styles.statLabel}>{label}</Text>
  </View>
);

export const OptionItem = ({ icon, label, rightElement, onPress }: any) => (
  <TouchableOpacity style={styles.optionItem} onPress={onPress}>
    <View style={styles.optionLeft}>
      <Ionicons name={icon} size={24} color="#4b5563" />
      <Text style={styles.optionText}>{label}</Text>
    </View>
    {rightElement || <Ionicons name="chevron-right" size={24} color="#9ca3af" />}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    padding: 16,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  profileInfo: {
    flex: 1,
  },
  name: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 8,
  },
  achievement: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  achievementText: {
    marginLeft: 8,
    color: '#6b7280',
  },
  statsCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
    elevation: 2,
  },
  statItem: {
    alignItems: 'center',
    minWidth: 80,
  },
  statValue: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 4,
  },
  statLabel: {
    color: '#6b7280',
    fontSize: 12,
  },
  settingsSection: {
    backgroundColor: 'white',
    borderRadius: 12,
    paddingHorizontal: 16,
    elevation: 2,
  },
  optionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    marginLeft: 16,
    fontSize: 16,
    color: '#1f2937',
  },
});

export default HomeScreen;