import { StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import * as Notifications from 'expo-notifications';

const Notification = () => {
	Notifications.setNotificationHandler({
		handleNotification: async () => ({
			shouldPlaySound: true,
			shouldSetBadge: true,
			shouldShowAlert: true
		})
	});

	useEffect(() => {
		const sub = Notifications.addNotificationReceivedListener(
			(notification) => {
				console.log(notification.request.content.data);
			}
		);
		return () => {
			sub.remove();
		};
	}, []);
	return <></>;
};

export default Notification;
