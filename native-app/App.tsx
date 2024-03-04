import { StyleSheet, Image, View, Text } from 'react-native';
import { Input } from './shared/Input/Input';
import { Colors, Gaps } from './shared/tokens';

import Button from './shared/Button/Button';

export default function App() {
	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<Image
					source={require('./assets/logotype.png')}
					style={styles.logo}
					resizeMode="contain"
				/>
				<View style={styles.form}>
					<Input placeholder="Email" />
					<Input isPassword placeholder="Пароль" />
					<Button text="Вход" />
				</View>
				<Text>Восстановить пароль</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.dark,
		justifyContent: 'center',
		padding: 55
	},
	form: {
		alignSelf: 'stretch',
		justifyContent: 'center',
		gap: Gaps.g16
	},
	content: {
		alignItems: 'center',
		gap: Gaps.g50
	},
	logo: {
		width: 170
	}
});
