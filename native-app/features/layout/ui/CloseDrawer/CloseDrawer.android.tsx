import { View, Pressable, StyleSheet } from 'react-native';
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types';
import CloseIcon from '../../../../assets/Icons/close';

export function CloseDrawer(navigation: DrawerNavigationHelpers) {
	return (
		<Pressable
			onPressIn={() => {
				navigation.closeDrawer();
				console.log('CloseDrawer');
			}}
			style={styles.wrapper}
		>
			<View style={styles.button}>
				<CloseIcon />
			</View>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	button: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	wrapper: {
		position: 'absolute',
		top: 0,
		right: 0,
		zIndex: 100,
		padding: 20
	}
});
