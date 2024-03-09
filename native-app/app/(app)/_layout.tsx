import { SplashScreen, Stack } from 'expo-router';

SplashScreen.preventAutoHideAsync();
export default function AppLayout() {
	return (
		<>
			<Stack>
				<Stack.Screen name="index" />
			</Stack>
		</>
	);
}
