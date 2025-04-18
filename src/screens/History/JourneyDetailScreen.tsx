import { View, Text, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';
import { useRoute } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons';
import ErrorView from '../ErrorView';
import { journeys } from '../../data/journeys';

const { width } = Dimensions.get('window');

export default function JourneyDetailScreen() {
  const route = useRoute();

  type RouteParams = {
      id: string;
  };

  const params = route.params as RouteParams | undefined;
  if (!params?.id) {
      return <ErrorView/>;
      }
  const { id } = params;
  const journey = journeys.find(j => j.id === id);
  if (!journey) {
    return <ErrorView />;
  }
  
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{journey.title}</Text>
      <Text style={styles.date}>{journey.date}</Text>



      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Icon name="time-outline" size={24} color="#2563eb" />
          <Text style={styles.statValue}>{journey.duration}</Text>
          <Text style={styles.statLabel}>总时长</Text>
        </View>
        <View style={styles.statItem}>
          <Icon name="navigate-outline" size={24} color="#2563eb" />
          <Text style={styles.statValue}>{journey.distance}</Text>
          <Text style={styles.statLabel}>总距离</Text>
        </View>
        <View style={styles.statItem}>
          <Icon name="trending-up-outline" size={24} color="#2563eb" />
          <Text style={styles.statValue}>{journey.stats.elevation}</Text>
          <Text style={styles.statLabel}>海拔变化</Text>
        </View>
        <View style={styles.statItem}>
          <Icon name="footsteps-outline" size={24} color="#2563eb" />
          <Text style={styles.statValue}>{journey.stats.steps}</Text>
          <Text style={styles.statLabel}>步数</Text>
        </View>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.sectionTitle}>详细数据</Text>
        <View style={styles.detailsGrid}>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>平均速度</Text>
            <Text style={styles.detailValue}>{journey.stats.avgSpeed}</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>最高速度</Text>
            <Text style={styles.detailValue}>{journey.stats.maxSpeed}</Text>
          </View>
        </View>
      </View>

      <View style={styles.photosContainer}>
        <Text style={styles.sectionTitle}>照片记录</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {journey.photos.map((photo, index) => (
            <Image
              key={index}
              source={{ uri: photo }}
              style={styles.photo}
            />
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 20,
    paddingBottom: 5,
    color: '#1f2937',
  },
  date: {
    fontSize: 16,
    color: '#6b7280',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  mapContainer: {
    height: 300,
    marginBottom: 20,
  },
  map: {
    flex: 1,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#ffffff',
    padding: 20,
    marginBottom: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1f2937',
    marginTop: 8,
  },
  statLabel: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 4,
  },
  detailsContainer: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 16,
  },
  detailsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  detailItem: {
    width: '50%',
    marginBottom: 16,
  },
  detailLabel: {
    fontSize: 14,
    color: '#6b7280',
  },
  detailValue: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1f2937',
    marginTop: 4,
  },
  photosContainer: {
    padding: 20,
  },
  photo: {
    width: width * 0.8,
    height: width * 0.6,
    borderRadius: 12,
    marginRight: 16,
  },
});
