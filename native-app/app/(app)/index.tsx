import { FlatList, StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import { useAtomValue, useSetAtom } from 'jotai';

import {
	courseAtom,
	loadCourseAtom
} from '../../entities/course/model/course.state';
import CourseCard from '../../entities/course/ui/CourseCard/CourseCard';
const RootIndex = () => {
	const { isLoading, error, courses } = useAtomValue(courseAtom);
	const loadCourses = useSetAtom(loadCourseAtom);
	const renderCourse = ({ item }: { item: StudentCourseDescription }) => {
		return (
			<View style={styles.item}>
				<CourseCard {...item} key={item.id} />
			</View>
		);
	};
	useEffect(() => {
		loadCourses();
	}, []);
	return (
		// <ScrollView>
		// 	<View style={styles.wrapper}>
		// 		{courses.length > 0 &&
		// 			courses.map((c) => <CourseCard key={c.id} {...c} />)}
		// 	</View>
		// </ScrollView>
		<>
			{courses.length > 0 && (
				<FlatList
					data={courses}
					keyExtractor={(item) => item.id.toString()}
					renderItem={renderCourse}
				/>
			)}
		</>
	);
};

export default RootIndex;

const styles = StyleSheet.create({
	// wrapper: {
	// 	flexDirection: 'column',
	// 	gap: Gaps.g20,
	// 	padding: 20
	// },
	item: {
		padding: 20
	}
});
