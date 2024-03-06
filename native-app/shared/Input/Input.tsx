import {
	Pressable,
	StyleSheet,
	TextInput,
	TextInputProps,
	View
} from 'react-native';
import { Colors, FontSize, Radius } from '../tokens';
import { useState } from 'react';
import EyeOpenIcon from '../../assets/Icons/eye-open';
import EyeClosedIcon from '../../assets/Icons/eye-closed';

export function Input(props: TextInputProps & { isPassword?: boolean }) {
	const [isVisable, setIsVisable] = useState<boolean>(false);
	return (
		<View>
			<TextInput
				secureTextEntry={props.isPassword && !isVisable}
				style={styles.input}
				{...props}
				placeholderTextColor={'#AFB2BF'}
			/>
			{props.isPassword && (
				<Pressable
					style={styles.eye}
					onPress={() => setIsVisable((state) => !state)}
				>
					{isVisable ? <EyeOpenIcon /> : <EyeClosedIcon />}
				</Pressable>
			)}
		</View>
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
		textDecorationLine: 'none',
		fontFamily: 'FiraSansSemiBold'
	},
	eye: {
		position: 'absolute',
		right: 0,
		marginHorizontal: 17,
		marginVertical: 20
	}
});
