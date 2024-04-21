import { Redirect, SplashScreen } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { useAtomValue } from 'jotai';
import { authAtom } from '../../entities/auth/model/auth.state';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Colors, FontSize } from '../../shared/tokens';
import MenuButton from '../../features/layout/ui/MenuButton/MenuButton';
import CustomDrawer from '../../widget/layout/ui/CustomDrawer/CustomDrawer';
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
	handleNotification: async () => ({
		shouldPlaySound: true,
		shouldSetBadge: true,
		shouldShowAlert: true
	})
});
SplashScreen.preventAutoHideAsync();
export default function AppLayout() {
	const { access_token } = useAtomValue(authAtom);
	if (!access_token) {
		return <Redirect href={'/login'}></Redirect>;
	}
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<Drawer
				screenOptions={({ navigation }) => ({
					headerStyle: {
						backgroundColor: Colors.grayDark,
						shadowColor: Colors.grayDark
					},
					headerTitleStyle: {
						color: Colors.white,
						fontFamily: FontSize.regular,
						fontSize: FontSize.f20
					},
					headerTitleAlign: 'center',
					sceneContainerStyle: {
						backgroundColor: Colors.dark
					},
					headerLeft: () => {
						return <MenuButton navigation={navigation} />;
					}
				})}
				drawerContent={(props) => {
					return <CustomDrawer {...props} />;
				}}
			>
				<Drawer.Screen
					name="index"
					options={{
						title: 'Мои курсы'
					}}
				/>
				<Drawer.Screen
					name="profile"
					options={{
						title: 'Мой профиль'
					}}
				/>
			</Drawer>
		</GestureHandlerRootView>
	);
}
