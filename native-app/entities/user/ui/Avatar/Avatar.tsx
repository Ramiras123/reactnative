import { Image, StyleSheet } from 'react-native';
import React from 'react';
import { User } from '../../model/user.model';
const Avatar = ({ image }: { image: string | null }) => {
	return (
		<>
			{image ? (
				<Image style={styles.image} source={{ uri: image }} />
			) : (
				<Image
					style={styles.image}
					source={require('../../../../assets/avatar-none.png')}
				/>
			)}
		</>
	);
};

export default Avatar;

const styles = StyleSheet.create({
	image: {
		width: 70,
		height: 70,
		borderRadius: 35
	}
});
