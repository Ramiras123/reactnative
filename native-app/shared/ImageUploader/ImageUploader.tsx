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
import FormData from 'form-data';
import axios, { AxiosError } from 'axios';
import { FILE_API } from '../api';
import { UploadInterface } from './ImageUploader.interface';

interface ImageUploaderProps {
	onUpload: (uri: string) => void;
	onError: (error: string) => void;
}

const ImageUploader = ({ onUpload, onError }: ImageUploaderProps) => {
	const [libraryPermissions, setLibraryPermissions] =
		useMediaLibraryPermissions();

	const upload = async () => {
		const isVerified = await verificationLibraryPermissions();
		if (!isVerified) {
			onError('Недостаточно прав');
			return;
		}
		const asset = await pickImage();
		if (!asset) {
			onError('Нет выбранного изображения');
			return;
		}
		const uploadUrl = await uploadToServer(asset.uri, asset.fileName ?? '');
		if (!uploadUrl) {
			onError('Не удалось загрузить изображение');
			return;
		}
		onUpload(uploadUrl);
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

	const pickImage = async () => {
		const result = await launchImageLibraryAsync({
			mediaTypes: MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [1, 1],
			quality: 0.5
		});
		if (!result.assets) {
			return null;
		}
		return result.assets[0];
	};

	const uploadToServer = async (
		uri: string,
		name: string
	): Promise<null | string> => {
		const formData = new FormData();
		formData.append('files', {
			uri,
			name,
			type: 'image/jpeg'
		});
		try {
			const { data } = await axios.post<UploadInterface>(
				FILE_API.uploadImage,
				formData,
				{
					headers: {
						'Content-Type': 'multipart/form-data'
					}
				}
			);
			return data.urls.original;
		} catch (error) {
			if (error instanceof AxiosError) {
				console.log(error);
			}
			return null;
		}
	};

	return (
		<Pressable onPress={upload}>
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
