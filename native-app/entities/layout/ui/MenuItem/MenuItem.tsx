import {
	Pressable,
	PressableProps,
	StyleSheet,
	Text,
	View
} from 'react-native';
import React, { ReactNode, useState } from 'react';
import {
	DrawerContentComponentProps,
	DrawerNavigationHelpers
} from '@react-navigation/drawer/lib/typescript/src/types';
import { Colors, FontSize, Gaps } from '../../../../shared/tokens';

interface MenuItemProps {
	drawer: DrawerContentComponentProps;
	icon: ReactNode;
	text: string;
	path: string;
}

const MenuItem = ({
	icon,
	drawer,
	text,
	path,
	...props
}: MenuItemProps & PressableProps) => {
	const [clicked, setClicked] = useState<boolean>(false);
	const isActive = drawer.state.routes[drawer.state.index].name === path;
	return (
		<Pressable
			{...props}
			onPress={() => drawer.navigation.navigate(path)}
			onPressIn={() => setClicked(true)}
			onPressOut={() => setClicked(false)}
		>
			<View
				style={{
					...styles.menu,
					borderColor: isActive ? Colors.primary : Colors.dark,
					borderRightWidth: 5,
					backgroundColor: clicked || isActive ? Colors.violetDark : Colors.dark
				}}
			>
				{icon}
				<Text style={styles.text}>{text}</Text>
			</View>
		</Pressable>
	);
};

export default MenuItem;

const styles = StyleSheet.create({
	menu: {
		flexDirection: 'row',
		gap: Gaps.g20,
		paddingHorizontal: 24,
		paddingVertical: 16,
		alignItems: 'center'
	},
	text: {
		color: Colors.white,
		fontSize: FontSize.f16,
		fontFamily: FontSize.regular
	}
});
