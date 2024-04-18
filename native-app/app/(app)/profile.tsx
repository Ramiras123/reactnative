import { Image, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import ImageUploader from '../../shared/ImageUploader/ImageUploader';
import { Gaps } from '../../shared/tokens';
import Avatar from '../../entities/user/ui/Avatar/Avatar';
import { updateProfileAtom } from '../../entities/user/model/user.state';
import Button from '../../shared/Button/Button';
import { useAtom } from 'jotai';

const Profile = () => {
	const [image, setImage] = useState<string | null>(null);
	const [profile, updateProfile] = useAtom(updateProfileAtom);
	const submitProfile = () => {
		if (!image) {
			return;
		}
		updateProfile({ photo: image });
	};

	useEffect(() => {
		if (profile && profile.profile?.photo) {
			setImage(profile.profile.photo);
		}
	}, [profile]);

	return (
		<View>
			<View style={styles.container}>
				<Avatar image={image} />

				<ImageUploader onUpload={setImage} onError={(e) => console.log(e)} />
			</View>
			<Button text="Сохранить" onPress={submitProfile} />
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
