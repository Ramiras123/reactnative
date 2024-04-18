import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Button from '../../shared/Button/Button';
import { useSetAtom } from 'jotai';
import { logoutAtom } from '../../entities/auth/model/auth.state';
const RootIndex = () => {
	const logout = useSetAtom(logoutAtom);
	return (
		<View>
			<Text>index</Text>
			<Button text="Выход" onPress={logout} />
		</View>
	);
};

export default RootIndex;

const styles = StyleSheet.create({});
