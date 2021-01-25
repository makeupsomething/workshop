import React from 'react';
import { useState } from 'react';
import ReactMapGL, { FlyToInterpolator } from 'react-map-gl';
import useGeolocation from '../hooks/useGeolocation';
import useLocalStorageState from '../hooks/useLocalStorage';

const MAPBOX_ACCESS_TOKEN = `${process.env.REACT_APP_MAP_BOX_KEY}`;

const Map = React.forwardRef(function MessagesDisplay(props, ref) {
	const { children } = props;
	const mapRef = React.useRef();
	const [userLocation, setUserLocation] = useLocalStorageState(
		'userLocation',
	);
	const geolocation = useGeolocation();

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

	function takescreenshot() {
		if (mapRef && mapRef.current) {
			const map = mapRef.current.getMap().getCanvas().toDataURL();
			let element = document.createElement('a');
			element.setAttribute('href', map);
			element.setAttribute('download', 'map-image.png');
			element.style.display = 'none';
			document.body.appendChild(element);
			element.click();
			document.body.removeChild(element);
		}
	}

	React.useImperativeHandle(ref, () => ({
		takescreenshot,
	}));

	return (
		<ReactMapGL
			{...viewport}
			onViewportChange={(nextViewport) => setViewport(nextViewport)}
			mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
			ref={mapRef}
			preserveDrawingBuffer={true}
		>
			{children}
		</ReactMapGL>
	);
});

export default Map;
