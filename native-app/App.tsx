import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, TextInput, Button } from 'react-native';
import { Input } from './shared/Input/Input';
import { Colors, Gaps } from './shared/Input/tokens';

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
					<Input placeholder="Пароль" />
					<Button title="Войти" />
				</View>
				<Button title="Восстановить пароль" />
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
