import React from 'react';
import { useState } from 'react';
import ReactMapGL, { FlyToInterpolator } from 'react-map-gl';
import useGeolocation from '../../hooks/useGeolocation';
import useLocalStorageState from '../../hooks/useLocalStorage';

const MAPBOX_ACCESS_TOKEN = `${process.env.REACT_APP_MAP_BOX_KEY}`;

const Map = () => {
	const geolocation = useGeolocation();

	//remove this this
	const userLocation = null;
	//and uncomment this
	// const [userLocation, setUserLocation] = useLocalStorageState(
	// 	'userLocation',
	// );

	// useState can be set with a function this is called a lazy initial state
	// this is not much benfit here but it can be useful
	// if the inital state is an expensive computation
	// https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
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

	//useEffect will run on each render
	//comment this out to get the users location from the browswer and set it on the map
	// React.useEffect(() => {
	// 	const { latitude, longitude } = geolocation;
	// 	if (latitude && longitude) {
	// 		setViewport((prevState) => ({
	// 			...prevState,
	// 			latitude,
	// 			longitude,
	// 			zoom: 8,
	// 		}));
	// 		setUserLocation({ latitude, longitude });
	// 	}
	// }, [geolocation, setUserLocation]);
	// we have to provide all variables that are used in the hook to the array
	// otherwise, your code will reference stale values from previous renders
	// https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects

	return (
		<ReactMapGL
			{...viewport}
			onViewportChange={(nextViewport) => setViewport(nextViewport)}
			mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
		/>
	);
};

export default Map;
