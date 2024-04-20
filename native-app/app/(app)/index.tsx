import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import Button from '../../shared/Button/Button';
import { useAtomValue, useSetAtom } from 'jotai';

import {
	courseAtom,
	loadCourseAtom
} from '../../entities/course/model/course.state';
import CourseCard from '../../entities/course/ui/CourseCard/CourseCard';
import { Gaps } from '../../shared/tokens';
const RootIndex = () => {
	const { isLoading, error, courses } = useAtomValue(courseAtom);
	const loadCourses = useSetAtom(loadCourseAtom);

	useEffect(() => {
		loadCourses();
	}, []);
	return (
		<ScrollView>
			<View style={styles.wrapper}>
				{courses.length > 0 &&
					courses.map((c) => <CourseCard key={c.id} {...c} />)}
			</View>
		</ScrollView>
	);
};

export default RootIndex;

const styles = StyleSheet.create({
	wrapper: {
		flexDirection: 'column',
		gap: Gaps.g20,
		padding: 20
	}
});
