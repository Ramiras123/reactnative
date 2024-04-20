import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { StudentCourseDescription } from '../../model/course.model';
import Chip from '../../../../shared/Chip/Chip';
import Button from '../../../../shared/Button/Button';
import { Colors, FontSize, Gaps, Radius } from '../../../../shared/tokens';

const CourseCard = ({
	image,
	shortTitle,
	courseOnDirection
}: StudentCourseDescription) => {
	return (
		<View style={styles.card}>
			<Image
				source={{
					uri: image
				}}
				style={styles.image}
				height={200}
			/>
			<View style={styles.header}>
				<Text style={styles.title}>{shortTitle}</Text>
				<View style={styles.chips}>
					{courseOnDirection.length > 0 &&
						courseOnDirection.map((c) => <Chip text={c.direction.name} />)}
				</View>
			</View>
			<View style={styles.footer}>
				<Button text="Купить" />
			</View>
		</View>
	);
};

export default CourseCard;

const styles = StyleSheet.create({
	card: {
		flexDirection: 'column',
		borderRadius: Radius.r10,
		backgroundColor: Colors.grayDark
	},
	image: {
		borderRadius: Radius.r10,
		borderBottomLeftRadius: 0,
		borderBottomRightRadius: 0
	},
	title: {
		fontSize: FontSize.f21,
		color: Colors.white,
		fontFamily: FontSize.bold,
		marginBottom: 12
	},
	header: {
		paddingHorizontal: 24,
		paddingVertical: 18
	},
	chips: {
		flexDirection: 'row',
		gap: Gaps.g10
	},
	footer: {
		backgroundColor: Colors.violetDark,
		paddingHorizontal: 24,
		paddingVertical: 20,
		borderBottomLeftRadius: Radius.r10,
		borderBottomRightRadius: Radius.r10
	}
});
