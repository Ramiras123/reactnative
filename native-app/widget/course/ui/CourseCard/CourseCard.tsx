import { Image, Linking, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { StudentCourseDescription } from '../../../../entities/course/model/course.model';
import Chip from '../../../../shared/Chip/Chip';
import Button from '../../../../shared/Button/Button';
import { Colors, FontSize, Gaps, Radius } from '../../../../shared/tokens';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import CourseProgress from '../../../../entities/course/ui/CourseProgress/CourseProgress';

const CourseCard = ({
	image,
	shortTitle,
	alias,
	tariffs,
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
				<CourseProgress totalLessons={120} passedLessons={40} />
				<Text style={styles.title}>{shortTitle}</Text>
				<View style={styles.chips}>
					{courseOnDirection.length > 0 &&
						courseOnDirection.map((c) => <Chip text={c.direction.name} />)}
				</View>
				<MaskedView
					maskElement={
						<Text style={styles.tariff}>
							Тариф &laquo;{tariffs[0].name}&raquo;
						</Text>
					}
				>
					<LinearGradient
						colors={['#D77BE5', '#6C38CC']}
						start={{ x: 0, y: 0 }}
						end={{ x: 1, y: 0 }}
					>
						<Text style={{ ...styles.tariff, ...styles.tariffWithOpacity }}>
							Тариф &laquo;{tariffs[0].name}&raquo;
						</Text>
					</LinearGradient>
				</MaskedView>
			</View>
			<View style={styles.footer}>
				<Button
					text="Купить"
					onPress={() =>
						Linking.openURL(`https://google.com/search?q=${alias}`)
					}
				/>
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
	tariff: {
		marginTop: 10,
		fontSize: FontSize.f16,
		fontFamily: FontSize.regular
	},
	tariffWithOpacity: {
		opacity: 0
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
