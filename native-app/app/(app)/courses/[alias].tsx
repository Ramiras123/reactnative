import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';

const Courses = () => {
	const { alias } = useLocalSearchParams();
	return (
		<View>
			<Text>{alias}</Text>
		</View>
	);
};

export default Courses;

const styles = StyleSheet.create({});
