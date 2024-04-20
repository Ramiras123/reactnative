import {
	StyleSheet,
	Image,
	View,
	Text,
	Dimensions,
	KeyboardAvoidingView,
	Platform
} from 'react-native';
import { Input } from '../shared/Input/Input';
import { Colors, Gaps } from '../shared/tokens';

import Button from '../shared/Button/Button';
import ErrorNotification from '../shared/ErrorNotification/ErrorNotification';
import { useEffect, useState } from 'react';
import { Link, router } from 'expo-router';
import CustomLink from '../shared/CustomLink/CustomLink';
import { useAtom } from 'jotai';
import { loginAtom } from '../entities/auth/model/auth.state';
import { useScreenOrientation } from '../shared/hooks';
import { Orientation } from 'expo-screen-orientation';

export default function Login() {
	const [valueEmail, setEmail] = useState<string>();
	const [valuePassword, setPassword] = useState<string>();
	const [auth, login] = useAtom(loginAtom);
	const [error, setError] = useState<string | undefined>(undefined);
	const orientation = useScreenOrientation();

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
			<KeyboardAvoidingView
				behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
				style={styles.content}
			>
				<Image
					source={require('../assets/logotype.png')}
					style={styles.logo}
					resizeMode="contain"
				/>
				<View style={styles.form}>
					<View
						style={{
							...styles.inputs,
							flexDirection:
								orientation === Orientation.PORTRAIT_UP ? 'column' : 'row'
						}}
					>
						<Input
							style={{
								width:
									orientation === Orientation.PORTRAIT_UP
										? 'auto'
										: Dimensions.get('screen').width / 2 - 16 - 48
							}}
							placeholder="Email"
							onChangeText={setEmail}
						/>
						<Input
							style={{
								width:
									orientation === Orientation.PORTRAIT_UP
										? 'auto'
										: Dimensions.get('screen').width / 2 - 16 - 48
							}}
							isPassword
							placeholder="Пароль"
							onChangeText={setPassword}
						/>
					</View>
					<Button text="Вход" onPress={submit} isLoading={auth.isLoading} />
				</View>
				<CustomLink href={'/restore'} text={'Восстановить пароль'} />
			</KeyboardAvoidingView>
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
	},
	inputs: {
		gap: Gaps.g16
	}
});
