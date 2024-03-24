import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { Colors, FontSize } from '../shared/tokens';
import { Link } from 'expo-router';
import CustomLink from '../shared/CustomLink/CustomLink';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function UnmatchedCustom() {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.content}>
				<Image source={require('../assets/404.png')} style={styles.image} />
				<Text style={styles.text}>
					Ооо... что-то пошло не так. Попробуйте вернуться на главный экран
					приложения
				</Text>
				<CustomLink href={'/'} text={'На главную страницу'} />
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		padding: 35
	},
	content: { alignItems: 'center', gap: 50 },
	image: {
		width: 204,
		height: 282
	},
	text: {
		fontSize: FontSize.f18,
		textAlign: 'center',
		color: Colors.white,
		fontFamily: FontSize.regular
	}
});
