import { Image, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import ImageUploader from '../../shared/ImageUploader/ImageUploader';
import { Gaps } from '../../shared/tokens';

const Profile = () => {
	const [image, setImage] = useState<string | null>(null);
	return (
		<View style={styles.container}>
			{image ? (
				<Image
					style={styles.image}
					source={{ uri: image, width: 100, height: 100 }}
				/>
			) : (
				<Image
					style={styles.image}
					source={require('../../assets/avatar-none.png')}
					resizeMode="contain"
				/>
			)}

			<ImageUploader onUpload={setImage} />
		</View>
	);
};

export default Profile;

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		flexDirection: 'row',
		gap: Gaps.g16,
		paddingHorizontal: 30,
		paddingVertical: 30,
		alignSelf: 'center'
	},
	image: {
		width: 70,
		height: 70,
		borderRadius: 35
	}
});
