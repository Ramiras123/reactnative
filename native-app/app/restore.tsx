import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const restore = () => {
	return (
		<Link href={'/'}>
			<Text style={{ color: '#FFFF' }}>restore</Text>
		</Link>
	);
};

export default restore;

const styles = StyleSheet.create({});
