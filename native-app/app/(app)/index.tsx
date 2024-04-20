import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import Button from '../../shared/Button/Button';
import { useAtomValue, useSetAtom } from 'jotai';

import {
	courseAtom,
	loadCourseAtom
} from '../../entities/course/model/course.state';
const RootIndex = () => {
	const { isLoading, error, courses } = useAtomValue(courseAtom);
	const loadCourses = useSetAtom(loadCourseAtom);

	useEffect(() => {
		loadCourses();
	}, []);
	return (
		<View>
			<Text>index</Text>
			{courses.length > 0 && courses.map((c) => <Text>{c.title}</Text>)}
		</View>
	);
};

export default RootIndex;

const styles = StyleSheet.create({});
