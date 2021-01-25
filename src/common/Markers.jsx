import React from 'react';
import { Marker } from 'react-map-gl';
import { LocationsContext } from './Locations/LocationsProvider';
import { Location } from '../Icons';

const Markers = React.memo(() => {
	const [state] = React.useContext(LocationsContext);
	const { locations } = state;

	return (
		locations.length > 0 &&
		locations.map((location) => (
			<Marker
				key={location.name}
				longitude={+location.longitude}
				latitude={+location.latitude}
			>
				<Location />
			</Marker>
		))
	);
});

Markers.displayName = 'Markers';

export default Markers;
