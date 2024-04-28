import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors, FontSize, Radius } from '../../../../shared/tokens';

const CourseProgress = ({
	totalLessons,
	passedLessons
}: {
	totalLessons: number;
	passedLessons: number;
}) => {
	const percent = Math.round((passedLessons / totalLessons) * 100);
	return (
		<View style={styles.wrapper}>
			<View style={styles.header}>
				<Text style={styles.textPercent}>{percent}%</Text>
				<Text style={styles.textCount}>
					{passedLessons}/{totalLessons}
				</Text>
			</View>
			<View style={styles.bar}>
				<View style={{ ...styles.progress, width: `${percent}%` }}></View>
			</View>
		</View>
	);
};

export default CourseProgress;

const styles = StyleSheet.create({
	wrapper: {
		marginBottom: 18
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-end',	
		marginBottom: 6
	},
	textPercent: {
		fontSize: FontSize.f16,
		fontFamily: FontSize.regular,
		color: Colors.pink
	},
	textCount: {
		fontSize: FontSize.f12,
		fontFamily: FontSize.regular,
		color: Colors.white
	},

	bar: {
		height: 5,
		borderRadius: 20,
		backgroundColor: Colors.border
	},
	progress: {
		height: 5,
		borderRadius: 20,
		backgroundColor: Colors.pink
	}
});
