import {
	ActivityIndicator,
	FlatList,
	RefreshControl,
	StyleSheet,
	View
} from 'react-native';
import React, { useEffect } from 'react';
import { useAtomValue, useSetAtom } from 'jotai';

import {
	courseAtom,
	loadCourseAtom
} from '../../entities/course/model/course.state';
import CourseCard from '../../widget/course/ui/CourseCard/CourseCard';
import { Colors } from '../../shared/tokens';
import Button from '../../shared/Button/Button';
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import Constants from 'expo-constants';

const RootIndex = () => {
	const { isLoading, error, courses } = useAtomValue(courseAtom);
	const loadCourses = useSetAtom(loadCourseAtom);
	const renderCourse = ({ item }: { item: StudentCourseDescription }) => {
		return (
			<View style={styles.item}>
				<CourseCard {...item} />
			</View>
		);
	};
	useEffect(() => {
		loadCourses();
	}, []);

	const allowsNotifications = async () => {
		const settings = await Notifications.getPermissionsAsync();
		return (
			settings.granted ||
			settings.ios?.status === Notifications.IosAuthorizationStatus.PROVISIONAL
		);
	};

	const requestPermissions = async () => {
		return Notifications.requestPermissionsAsync({
			ios: {
				allowAlert: true,
				allowBadge: true,
				allowSound: true
			}
		});
	};
	const scheduleNotification = async () => {
		const granted = await allowsNotifications();
		if (!granted) {
			await requestPermissions();
		}
		if (Device.isDevice) {
			const token = await Notifications.getExpoPushTokenAsync({
				projectId: Constants.expoConfig?.extra?.eas.projectId
			});
		}
		Notifications.scheduleNotificationAsync({
			content: {
				title: 'Typescript',
				body: 'babab',
				data: { alias: 'typescript' }
			},
			trigger: {
				seconds: 5
			}
		});
	};

	return (
		// <ScrollView>
		// 	<View style={styles.wrapper}>
		// 		{courses.length > 0 &&
		// 			courses.map((c) => <CourseCard key={c.id} {...c} />)}
		// 	</View>
		// </ScrollView>
		<>
			{isLoading && (
				<ActivityIndicator
					style={styles.activity}
					size="large"
					color={Colors.primary}
				/>
			)}
			<Button text="Напомнить" onPress={scheduleNotification} />
			{courses.length > 0 && (
				<FlatList
					refreshControl={
						<RefreshControl
							tintColor={Colors.primary}
							titleColor={Colors.primary}
							refreshing={isLoading}
							onRefresh={loadCourses}
						/>
					}
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
	},
	activity: {
		marginTop: 30
	}
});
