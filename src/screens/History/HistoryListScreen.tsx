import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigation } from '../../navigation/types';
import { Journey } from '../types';
import { journeys } from '../../data/journeys';


const HistoryListScreen = () => {
  const navigation = useNavigation<RootStackNavigation>();

  const renderItem = ({ item }: { item: Journey }) => (
    <TouchableOpacity 
      style={styles.card}
      onPress={() => navigation.navigate('JourneyDetails', { id: item.id })}
    >
      <Image source={{ uri: item.coverPhoto }} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardDate}>{item.date}</Text>
        <View style={styles.cardStats}>
          <View style={styles.statRow}>
            <Icon name="time-outline" size={16} color="#666" />
            <Text style={styles.statText}>{item.duration}</Text>
          </View>
          <View style={styles.statRow}>
            <Icon name="navigate-outline" size={16} color="#666" />
            <Text style={styles.statText}>{item.distance}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={journeys}
      renderItem={renderItem}
      keyExtractor={(item: Journey) => item.id}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f5f5f5'
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardImage: {
    width: '100%',
    height: 160,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12
  },
  cardContent: {
    padding: 16
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4
  },
  cardDate: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12
  },
  cardStats: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  statRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  statText: {
    marginLeft: 8,
    color: '#666'
  }
});

export default HistoryListScreen;