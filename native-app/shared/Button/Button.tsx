import {
	Animated,
	GestureResponderEvent,
	Pressable,
	PressableProps,
	StyleSheet,
	Text,
	View
} from 'react-native';
import React from 'react';
import { Colors, FontSize, Radius } from '../tokens';

export default function Button(props: PressableProps & { text: string }) {
	const animatedValue = new Animated.Value(100);
	const color = animatedValue.interpolate({
		inputRange: [0, 100],
		outputRange: [Colors.primaryHover, Colors.primary]
	});

	const ClickIn = (e: GestureResponderEvent) => {
		Animated.timing(animatedValue, {
			toValue: 0,
			duration: 300,
			useNativeDriver: false
		}).start();
		props.onPressIn && props.onPressIn(e);
	};
	const ClickOut = (e: GestureResponderEvent) => {
		Animated.timing(animatedValue, {
			toValue: 100,
			duration: 300,
			useNativeDriver: false
		}).start();
		props.onPressOut && props.onPressOut(e);
	};
	return (
		<Pressable {...props} onPressIn={ClickIn} onPressOut={ClickOut}>
			<Animated.View
				style={{
					...styles.btn,
					backgroundColor: color
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
