import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect } from 'react';
import {
	DrawerContentComponentProps,
	DrawerContentScrollView
} from '@react-navigation/drawer';
import { Colors } from '../../../../shared/tokens';
import CustomLink from '../../../../shared/CustomLink/CustomLink';
import { useAtom, useSetAtom } from 'jotai';
import { logoutAtom } from '../../../auth/model/auth.state';
import { CloseDrawer } from '../../../../features/layout/ui/CloseDrawer/CloseDrawer';
import { loadProfileAtom } from '../../../user/model/user.state';
import UserMenu from '../../../user/ui/UserMenu/UserMenu';
import MenuItem from '../MenuItem/MenuItem';
import CoursesIcon from '../../../../assets/menu/courses';
import UserIcon from '../../../../assets/menu/user';

const MENU = [
	{
		text: 'Профиль',
		icon: <UserIcon />,
		path: 'profile'
	},

	{
		text: 'Курсы',
		icon: <CoursesIcon />,
		path: 'index'
	}
];

const CustomDrawer = (props: DrawerContentComponentProps) => {
	const logout = useSetAtom(logoutAtom);
	const [profile, loadProfile] = useAtom(loadProfileAtom);

	useEffect(() => {
		loadProfile();
	}, []);
	return (
		<DrawerContentScrollView
			{...props}
			contentContainerStyle={styles.scrollView}
		>
			<View style={styles.content}>
				<CloseDrawer {...props.navigation} />

				<UserMenu user={profile.profile} />
				{MENU.map((menu) => (
					<MenuItem {...menu} key={menu.path} drawer={props} />
				))}
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
