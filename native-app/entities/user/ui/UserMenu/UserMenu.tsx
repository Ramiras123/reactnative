import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { User } from '../../model/user.model';
import { Colors, FontSize, Gaps } from '../../../../shared/tokens';

const UserMenu = ({ user }: { user: User | null }) => {
	if (!user) {
		return;
	}
	return (
		<View style={styles.container}>
			{user.photo ? (
				<Image style={styles.image} source={{ uri: user.photo }} />
			) : (
				<Image
					style={styles.image}
					source={require('../../../../assets/avatar-none.png')}
				/>
			)}
			<Text style={styles.name}>
				{user.name} {user.surname}
			</Text>
		</View>
	);
};

export default UserMenu;

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		gap: Gaps.g8,
		marginTop: 30,
		zIndex: 1
	},
	image: {
		width: 60,
		height: 60,
		borderRadius: 30
	},
	name: {
		fontSize: FontSize.f16,
		fontFamily: FontSize.regular,
		color: Colors.white
	}
});
