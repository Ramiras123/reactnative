import React, { useEffect } from 'react';
import { SplashScreen, Stack } from 'expo-router';
import { Colors } from '../shared/tokens';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';

SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
	const [loaded, error] = useFonts({
		FiraSans: require('../assets/fonts/FiraSans-Regular.ttf'),
		FiraSansSemiBold: require('../assets/fonts/FiraSans-SemiBold.ttf')
	});
	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);
	if (!loaded) {
		return null;
	}
	return (
		<>
			<SafeAreaProvider>
				<StatusBar style="light" />
				<Stack
					screenOptions={{
						statusBarColor: Colors.dark,
						contentStyle: {
							backgroundColor: Colors.dark
						},
						headerShown: false
					}}
				>
					<Stack.Screen name="login" />

					<Stack.Screen
						name="restore"
						options={{
							presentation: 'modal'
						}}
					/>
				</Stack>
			</SafeAreaProvider>
		</>
	);
}
