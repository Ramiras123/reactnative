import { Pressable, PressableProps, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import MenuIcon from '../../../../assets/Icons/menu';
import { Colors } from '../../../../shared/tokens';

export default function MenuButton({
	navigation,
	...props
}: PressableProps & { navigation: any }) {
	const [clicked, setClicked] = useState<boolean>(false);
	return (
		<Pressable
			{...props}
			onPressIn={() => setClicked(true)}
			onPressOut={() => setClicked(false)}
			onPress={() => navigation.toggleDrawer()}
		>
			<View
				style={{
					...styles.btn,
					backgroundColor: clicked ? Colors.violetDark : Colors.grayDark
				}}
			>
				<MenuIcon />
			</View>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	btn: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
		paddingHorizontal: 20
	}
});
