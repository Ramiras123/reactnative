import {
	Pressable,
	PressableProps,
	StyleSheet,
	Text,
	View
} from 'react-native';
import React from 'react';
import { Colors, FontSize, Radius } from '../tokens';

export default function Button(props: PressableProps & { text: string }) {
	return (
		<Pressable {...props}>
			<View style={styles.btn}>
				<Text style={styles.text}>{props.text}</Text>
			</View>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	btn: {
		paddingVertical: 18,
		paddingHorizontal: 24,
		backgroundColor: Colors.primary,
		borderRadius: Radius.r10
	},
	text: {
		color: Colors.white,
		fontSize: FontSize.f18,
		alignSelf: 'center'
	}
});
