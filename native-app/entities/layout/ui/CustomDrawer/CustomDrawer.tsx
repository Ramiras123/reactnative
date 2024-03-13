import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import {
	DrawerContentComponentProps,
	DrawerContentScrollView
} from '@react-navigation/drawer';
import { Colors } from '../../../../shared/tokens';
import CustomLink from '../../../../shared/CustomLink/CustomLink';
import { useSetAtom } from 'jotai';
import { logoutAtom } from '../../../auth/model/auth.state';
import { CloseDrawer } from '../../../../features/layout/ui/CloseDrawer/CloseDrawer';

const CustomDrawer = (props: DrawerContentComponentProps) => {
	const logout = useSetAtom(logoutAtom);
	return (
		<DrawerContentScrollView
			{...props}
			contentContainerStyle={styles.scrollView}
		>
			<View style={styles.content}>
				<CloseDrawer {...props.navigation} />

				<Text>Drawer</Text>
			</View>
			<View style={styles.footer}>
				<CustomLink text="Выход" onPress={logout} href={'/'}></CustomLink>
				<Image
					style={styles.logo}
					source={require('../../../../assets/logotype.png')}
					resizeMode="contain"
				/>
			</View>
		</DrawerContentScrollView>
	);
};

export default CustomDrawer;

const styles = StyleSheet.create({
	scrollView: {
		flex: 1,
		backgroundColor: Colors.dark
	},
	content: {
		flex: 1
	},
	footer: {
		gap: 50,
		marginBottom: 40,
		alignItems: 'center'
	},
	logo: {
		width: 160
	}
});
