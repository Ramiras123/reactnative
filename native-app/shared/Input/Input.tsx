import { StyleSheet, TextInput, TextInputProps } from 'react-native';
import { Colors, FontSize, Radius } from './tokens';

export function Input(props: TextInputProps) {
	return (
		<TextInput
			style={styles.input}
			{...props}
			placeholderTextColor={'#AFB2BF'}
		/>
	);
}

const styles = StyleSheet.create({
	input: {
		borderRadius: Radius.r10,
		paddingHorizontal: 26,
		backgroundColor: Colors.violetDark,
		paddingVertical: 20,
		fontSize: FontSize.f16,
		color: Colors.white,
		fontStyle: 'normal',
		textDecorationLine: 'none'
	}
});
