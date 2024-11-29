import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { Text, View } from 'react-native';
import {GestureHandlerRootView, Pressable} from 'react-native-gesture-handler'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
const componentList: number[] = Array.from(new Array(100).keys());

  
export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const rippleColor = '#FF0000';

  return (
    <GestureHandlerRootView>
      <View style={{flex: 1, backgroundColor: '#ABABAB4F'}}>
          <Pressable
              onPress={() => console.log('onPress')}
              android_ripple={{color: rippleColor}}
          >
            <Text>'Hello World'</Text>
        </Pressable>
      </View>
    </GestureHandlerRootView>
  );
}
