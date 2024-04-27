import { StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import * as Notifications from 'expo-notifications';
import { useRouter } from 'expo-router';

const Notification = () => {
	const router = useRouter();

	Notifications.setNotificationHandler({
		handleNotification: async () => ({
			shouldPlaySound: true,
			shouldSetBadge: true,
			shouldShowAlert: true
		})
	});

	useEffect(() => {
		const subReceived = Notifications.addNotificationReceivedListener(
			(notification) => {
				console.log(notification.request.content.data);
			}
		);
		const subResponseReceived =
			Notifications.addNotificationResponseReceivedListener((response) => {
				const alias = response.notification.request.content.data;
				router.push(`/(app)/course/${alias}`);
			});
		return () => {
			subReceived.remove();
			subResponseReceived.remove();
		};
	}, []);
	return <></>;
};

export default Notification;
