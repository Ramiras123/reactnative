import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Colors, FontSize } from '../tokens';

export interface ErrorNotificationProps {
	error: string | undefined;
}

const ErrorNotification = ({ error }: ErrorNotificationProps) => {
	const [isShow, setIsShow] = useState<boolean>(false);

	useEffect(() => {
		if (!error) {
			return;
		}
		setIsShow(true);
		const timerId = setTimeout(() => {
			setIsShow(false);
		}, 3000);
		return () => {
			clearTimeout(timerId);
		};
	}, [error]);

	if (!isShow) {
		return <></>;
	}
	return (
		<View style={styles.error}>
			<Text style={styles.text}>{error}</Text>
		</View>
	);
};

export default ErrorNotification;

const styles = StyleSheet.create({
	error: {
		backgroundColor: Colors.error,
		position: 'absolute',
		top: 0,
		width: Dimensions.get('screen').width,
		padding: 15
	},
	text: {
		marginTop: 50,
		fontSize: FontSize.f16,
		color: Colors.white,
		textAlign: 'center',
		flexWrap: 'nowrap'
	}
});
