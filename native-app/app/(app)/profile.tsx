import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import {
	launchCameraAsync,
	MediaTypeOptions,
	useCameraPermissions,
	PermissionStatus,
	useMediaLibraryPermissions,
	launchImageLibraryAsync
} from 'expo-image-picker';
import Button from '../../shared/Button/Button';

const Profile = () => {
	const [image, setImage] = useState<string | null>(null);
	const [cameraPermissions, setCameraPermissions] = useCameraPermissions();
	const [libraryPermissions, setLibraryPermissions] =
		useMediaLibraryPermissions();

	const verificationCameraPermissions = async () => {
		if (cameraPermissions?.status === PermissionStatus.UNDETERMINED) {
			const res = await setCameraPermissions();
			return res.granted;
		}
		if (cameraPermissions?.status === PermissionStatus.DENIED) {
			return false;
		}
		return true;
	};

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

	const captureAvatar = async () => {
		const isVerified = await verificationCameraPermissions();
		if (!isVerified) {
			return;
		}
		const result = await launchCameraAsync({
			mediaTypes: MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [1, 1],
			quality: 0.5
		});
		if (!result.assets) {
			return;
		}
		setImage(result.assets[0].uri);
	};

	const pickAvatar = async () => {
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
		setImage(result.assets[0].uri);
	};
	return (
		<View>
			<Text>Profile</Text>
			<Button text="Сфотографировать" onPress={captureAvatar} />
			<Button text="Выбрать изображение" onPress={pickAvatar} />
			{image && <Image source={{ uri: image, width: 100, height: 100 }} />}
		</View>
	);
};

export default Profile;

const styles = StyleSheet.create({});
