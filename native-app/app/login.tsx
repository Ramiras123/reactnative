import { StyleSheet, Image, View, Text } from 'react-native';
import { Input } from '../shared/Input/Input';
import { Colors, Gaps } from '../shared/tokens';

import Button from '../shared/Button/Button';
import ErrorNotification from '../shared/ErrorNotification/ErrorNotification';
import { useEffect, useState } from 'react';
import { Link, router } from 'expo-router';
import CustomLink from '../shared/CustomLink/CustomLink';
import { useAtom } from 'jotai';
import { loginAtom } from '../entities/auth/model/auth.state';

export default function Login() {
	const [valueEmail, setEmail] = useState<string>();
	const [valuePassword, setPassword] = useState<string>();
	const [auth, login] = useAtom(loginAtom);
	const [error, setError] = useState<string | undefined>(undefined);

	const submit = () => {
		if (!valueEmail) {
			setError('Не указана почта');
			return;
		}
		if (!valuePassword) {
			setError('Не указан пароль');
			return;
		}
		login({ email: valueEmail, password: valuePassword });

		// setError('Ошибка');
		// setTimeout(() => {
		// 	setError(undefined);
		// }, 4000);
	};

	useEffect(() => {
		if (auth.error) {
			setError(auth.error);
		}
	}, [auth.error]);

	useEffect(() => {
		if (auth.access_token) {
			router.replace('/');
		}
	}, [auth.access_token]);
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
					<Input placeholder="Email" onChangeText={setEmail} />
					<Input isPassword placeholder="Пароль" onChangeText={setPassword} />
					<Button text="Вход" onPress={submit} />
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
