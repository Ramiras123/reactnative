import { StyleSheet, Text } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { Colors, FontSize } from '../tokens';
import { LinkProps } from 'expo-router/build/link/Link';

const CustomLink = (props: LinkProps & { text: string }) => {
	return (
		<Link style={styles.link} {...props}>
			<Text>{props.text}</Text>
		</Link>
	);
};

export default CustomLink;

const styles = StyleSheet.create({
	link: {
		color: Colors.link,
		fontFamily: FontSize.regular,
		fontSize: FontSize.f18
	}
});
