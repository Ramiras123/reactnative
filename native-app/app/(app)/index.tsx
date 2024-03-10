import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { useAtomValue, useSetAtom } from 'jotai';
import { authAtom, logoutAtom } from '../../entities/auth/model/auth.state';
import { router, useRootNavigationState } from 'expo-router';
const RootIndex = () => {
	const { access_token } = useAtomValue(authAtom);
	const state = useRootNavigationState();
	useEffect(() => {
		if (!state?.key) return;
		if (!access_token) {
			router.replace('/login');
		}
	}, [access_token, state]);
	return (
		<View>
			<Text>index</Text>
		</View>
	);
};

export default RootIndex;

const styles = StyleSheet.create({});
