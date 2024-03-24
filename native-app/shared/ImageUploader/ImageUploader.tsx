import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {
	useMediaLibraryPermissions,
	PermissionStatus,
	MediaTypeOptions,
	launchImageLibraryAsync
} from 'expo-image-picker';
import UploaderIcon from '../../assets/Icons/uploader';
import { Colors, FontSize, Gaps, Radius } from '../tokens';

interface ImageUploaderProps {
	onUpload: (uri: string) => void;
}

const ImageUploader = ({ onUpload }: ImageUploaderProps) => {
	const [libraryPermissions, setLibraryPermissions] =
		useMediaLibraryPermissions();

	const verificationLibraryPermissions = async () => {
		if (libraryPermissions?.status === PermissionStatus.UNDETERMINED) {
			const res = await setLibraryPermissions();
			return res.granted;
		}
		if (libraryPermissions?.status === PermissionStatus.DENIED) {
			return false;
		}
		return true;
	};

	const pickImage = async () => {
		const isVerified = await verificationLibraryPermissions();
		if (!isVerified) {
			return;
		}
		const result = await launchImageLibraryAsync({
			mediaTypes: MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [1, 1],
			quality: 0.5
		});
		if (!result.assets) {
			return;
		}
		onUpload(result.assets[0].uri);
	};

	return (
		<Pressable onPress={pickImage}>
			<View style={styles.container}>
				<UploaderIcon />
				<Text style={styles.text}>Загрузить изображение</Text>
			</View>
		</Pressable>
	);
};

export default ImageUploader;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		gap: Gaps.g8,
		alignItems: 'center',
		paddingHorizontal: 20,
		paddingVertical: 17,
		backgroundColor: Colors.violetDark,
		borderRadius: Radius.r10
	},
	text: {
		fontFamily: FontSize.regular,
		fontSize: FontSize.f14,
		color: Colors.white
	}
});
