import { useEffect, useState } from 'react';
import * as ScreenOrientation from 'expo-screen-orientation'

export function useScreenOrientation() { 
	const [orientation, setOrientation] = useState<ScreenOrientation.Orientation>();
	useEffect(() => {


		ScreenOrientation.getOrientationAsync().then((o) => {setOrientation(o)});
		const subscribe = ScreenOrientation.addOrientationChangeListener((e) => {
			setOrientation(e.orientationInfo.orientation);
		})
		return () => {
			ScreenOrientation.removeOrientationChangeListener(subscribe);
		}
	}, [])
	return orientation;
}