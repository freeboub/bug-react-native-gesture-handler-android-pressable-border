import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { Text } from 'react-native';
import {GestureHandlerRootView, Pressable} from 'react-native-gesture-handler'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  useEffect(() => {
      SplashScreen.hideAsync();
  }, []);

  return (
    <GestureHandlerRootView>
      <Pressable
          style={{borderBottomColor: '#FF0000', borderBottomWidth: 5}}
          onPress={() => console.log('onPress')}
      >
        <Text>'Hello World'</Text>
      </Pressable>
    </GestureHandlerRootView>
  );
}
