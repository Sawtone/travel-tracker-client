import { NavigationProp } from '@react-navigation/native';

export type RootStackParamList = {
  Tabs: undefined;
  JourneyDetails: { id: string };
  Settings: undefined;
};

export type TabParamList = {
  Map: undefined;
  History: undefined;
  Home: undefined;
};

export type RootStackNavigation = NavigationProp<RootStackParamList>;
export type TabNavigation = NavigationProp<TabParamList>;