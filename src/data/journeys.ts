import { Journey } from '../screens/types';

export const journeys: Journey[] = [
    {
      id: '1',
      date: '2024-01-20',
      title: '东京之旅',
      distance: '12.5km',
      duration: '4小时30分钟',
      coverPhoto: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1371&q=80',
      coordinates: [
        { latitude: 35.6762, longitude: 139.6503 },
        { latitude: 35.6804, longitude: 139.7690 },
      ],
      stats: {
        avgSpeed: '4.2km/h',
        maxSpeed: '6.8km/h',
        elevation: '+123m',
        steps: '15,234',
      },
      photos: [
        'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf',
      ]
    },
    {
      id: '2', 
      date: '2024-01-18',
      title: '大阪环游',
      distance: '15.3km',
      duration: '6小时52分钟',
      coverPhoto: 'https://images.unsplash.com/photo-1542931287-023b922fa89b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1371&q=80',
      coordinates: [
        { latitude: 35.6762, longitude: 139.6503 },
        { latitude: 35.6804, longitude: 139.7690 },
      ],
      stats: {
        avgSpeed: '1.5km/h',
        maxSpeed: '3.6km/h',
        elevation: '+553m',
        steps: '9533',
      },
      photos: [
        'https://images.unsplash.com/photo-1542931287-023b922fa89b',
      ]
    }
  ];