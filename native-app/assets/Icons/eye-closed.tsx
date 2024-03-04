import * as React from 'react';
import Svg, { SvgProps, Defs, ClipPath, Path, G } from 'react-native-svg';
const EyeClosedIcon = (props: SvgProps) => (
	<Svg
		width={24}
		height={24}
		fill="none"
	>
		<Defs>
			<ClipPath id="a">
				<Path fill="#fff" fillOpacity={0} d="M0 0h24v24H0z" />
			</ClipPath>
		</Defs>
		<G clipPath="url(#a)">
			<Path
				stroke="#AFB2BF"
				strokeWidth={1.5}
				d="M22 7s-.941 2.197-3 4.129c-.913.857-2.045 1.661-3.413 2.2A9.713 9.713 0 0 1 12 14C5 14 2 7 2 7m6.413 6.329L7 15.5m12-4.371 1.5 1.5M12 14v2.5m3.587-3.171L17 15.5M5 11.129l-1.5 1.5"
			/>
		</G>
	</Svg>
);
export default EyeClosedIcon;
