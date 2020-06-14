import { useState, useEffect } from 'react';

function getWindowDimensions() {
	const { innerHeight: height, innerWidth: width } = window;
	return {
		height,
		width
	};
}

export default function useWindowDimensions() {
	const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

	useEffect(() => {
		const handleResize = () => {
			setWindowDimensions(getWindowDimensions());
		}

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return windowDimensions;
}