import React from 'react';
import { useState } from 'react';
import ReactMapGL, { FlyToInterpolator } from 'react-map-gl';
import useGeolocation from '../../hooks/useGeolocation';
import useLocalStorageState from '../../hooks/useLocalStorage';

const MAPBOX_ACCESS_TOKEN = `${process.env.REACT_APP_MAP_BOX_KEY}`;

const Map = ({ children }) => {
	const geolocation = useGeolocation();
	const [userLocation, setUserLocation] = useLocalStorageState(
		'userLocation',
	);
	const [viewport, setViewport] = useState(() => {
		if (userLocation) {
			const { latitude, longitude } = userLocation;
			return {
				latitude,
				longitude,
				zoom: 8,
				height: '100%',
				width: '100%',
				transitionDuration: 3000,
				transitionInterpolator: new FlyToInterpolator(),
			};
		} else {
			return {
				height: '100%',
				width: '100%',
				transitionDuration: 3000,
				transitionInterpolator: new FlyToInterpolator(),
			};
		}
	});

	React.useEffect(() => {
		const { latitude, longitude } = geolocation;
		if (latitude && longitude) {
			setViewport((prevState) => ({
				...prevState,
				latitude,
				longitude,
				zoom: 8,
			}));
			setUserLocation({ latitude, longitude });
		}
	}, [geolocation, setUserLocation]);

	return (
		<ReactMapGL
			{...viewport}
			onViewportChange={(nextViewport) => setViewport(nextViewport)}
			mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
		>
			{children}
		</ReactMapGL>
	);
};

export default Map;
