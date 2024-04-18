import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { User } from '../../../../entities/user/model/user.model';
import { Colors, FontSize, Gaps } from '../../../../shared/tokens';
import Avatar from '../../../../entities/user/ui/Avatar/Avatar';

const UserMenu = ({ user }: { user: User | null }) => {
	if (!user) {
		return;
	}
	return (
		<View style={styles.container}>
			<Avatar image={user.photo ?? null} />
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
		marginBottom: 40,
		zIndex: 1
	},
	name: {
		fontSize: FontSize.f16,
		fontFamily: FontSize.regular,
		color: Colors.white
	}
});
