import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors, FontSize, Radius } from '../tokens';

const Chip = ({ text }: { text: string }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{text}</Text>
		</View>
	);
};

export default Chip;

const styles = StyleSheet.create({
	container: {
		paddingVertical: 5,
		paddingHorizontal: 10,
		borderColor: Colors.border,
		borderRadius: Radius.r17,
		borderWidth: 1
	},
	text: {
		fontFamily: FontSize.regular,
		fontSize: FontSize.f14,
		color: Colors.white
	}
});
