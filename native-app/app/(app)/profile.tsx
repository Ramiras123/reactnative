import { Image, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import ImageUploader from '../../shared/ImageUploader/ImageUploader';
import { Gaps } from '../../shared/tokens';
import Avatar from '../../entities/user/ui/Avatar/Avatar';

const Profile = () => {
	const [image, setImage] = useState<string | null>(null);
	return (
		<View style={styles.container}>
			<Avatar image={image} />

			<ImageUploader onUpload={setImage} onError={(e) => console.log(e)} />
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
