import { NavigationProp } from '@react-navigation/native';

export interface Journey {
  id: string;
  date: string;
  title: string;
  distance: string;
  duration: string;
  coverPhoto: string;
  coordinates: { latitude: number; longitude: number }[];
  stats: {
      avgSpeed: string;
      maxSpeed: string;
      elevation: string;
      steps: string;
  };
  photos: string[];
}

  