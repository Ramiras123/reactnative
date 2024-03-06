import { StyleSheet, Image, View, Text } from 'react-native';
import { Input } from '../shared/Input/Input';
import { Colors, Gaps } from '../shared/tokens';

import Button from '../shared/Button/Button';
import ErrorNotification from '../shared/ErrorNotification/ErrorNotification';
import { useState } from 'react';
import { Link } from 'expo-router';
import CustomLink from '../shared/CustomLink/CustomLink';

export default function Login() {
	const [error, setError] = useState<string | undefined>(undefined);
	const onClick = () => {
		setError('Ошибка');
		setTimeout(() => {
			setError(undefined);
		}, 4000);
	};
	return (
		<View style={styles.container}>
			<ErrorNotification error={error} />
			<View style={styles.content}>
				<Image
					source={require('../assets/logotype.png')}
					style={styles.logo}
					resizeMode="contain"
				/>
				<View style={styles.form}>
					<Input placeholder="Email" />
					<Input isPassword placeholder="Пароль" />
					<Button text="Вход" onPress={onClick} />
				</View>
				<CustomLink href={'/restore'} text={'Восстановить пароль'} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.dark,
		justifyContent: 'center'
	},
	form: {
		alignSelf: 'stretch',
		justifyContent: 'center',
		gap: Gaps.g16
	},
	content: {
		padding: 55,
		alignItems: 'center',
		gap: Gaps.g50
	},
	logo: {
		width: 170
	}
});
