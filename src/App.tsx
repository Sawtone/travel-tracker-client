import React from 'react';
import { StatusBar } from 'react-native';
import RootNavigator from './navigation/RootNavigator';

// 安全距离构建失败
// Error: Exception thrown when executing UIFrameGuarded
//        Attempt to invoke interface method on a null object reference
// import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  return (
      <>
        <StatusBar barStyle="dark-content"/>
        <RootNavigator />
      </>
  );
};

export default App;