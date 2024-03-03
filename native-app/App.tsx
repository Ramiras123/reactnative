import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, TextInput, Button } from 'react-native';

export default function App() {
	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<Image
					source={require('./assets/icon.png')}
					style={{ width: 40, height: 40 }}
				/>
				<View style={styles.form}>
					<TextInput placeholder="Email" style={styles.input}></TextInput>
					<TextInput placeholder="Пароль" style={styles.input}></TextInput>
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
		backgroundColor: 'rgb(30, 30, 30)',
		justifyContent: 'center',
		padding: 55
	},
	form: {
		alignSelf: 'stretch',
		justifyContent: 'center',
		gap: 16
	},
	content: {
		alignItems: 'center',
		gap: 50
	},
	input: {
		backgroundColor: '#2E2D3D',
		color: '#AFB2BF'
	}
});
