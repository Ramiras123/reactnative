import {
	Animated,
	Pressable,
	PressableProps,
	StyleSheet,
	Text,
	View
} from 'react-native';
import React from 'react';
import { Colors, FontSize, Radius } from '../tokens';

export default function Button(props: PressableProps & { text: string }) {
	const animatedValue = new Animated.ValueXY({ x: 0, y: 0 });

	const handlerClick = () =>
		Animated.timing(animatedValue, {
			toValue: {
				x: 50,
				y: 50
			},
			duration: 3000,
			useNativeDriver: true
		}).start();
	return (
		<Pressable {...props} onPress={handlerClick}>
			<Animated.View
				style={{
					...styles.btn,
					transform: [
						{
							translateX: animatedValue.x
						},
						{ translateY: animatedValue.y }
					]
				}}
			>
				<Text style={styles.text}>{props.text}</Text>
			</Animated.View>
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
