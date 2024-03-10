import { Redirect, SplashScreen, Stack } from 'expo-router';
import { useAtomValue } from 'jotai';
import { authAtom } from '../../entities/auth/model/auth.state';

SplashScreen.preventAutoHideAsync();
export default function AppLayout() {
	const { access_token } = useAtomValue(authAtom);
	if (!access_token) {
		return <Redirect href={'/login'}></Redirect>;
	}
	return (
		<>
			<Stack>
				<Stack.Screen name="index" />
			</Stack>
		</>
	);
}
