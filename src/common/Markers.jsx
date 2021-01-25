import React from 'react';
import { Marker } from 'react-map-gl';
import { LocationsContext } from './Locations/LocationsProvider';
import { Location } from '../Icons';

// If your component renders the same result given the same props, you can wrap it in a call to React.memo for a performance boost in some cases by memoizing the result.
// This means that React will skip rendering the component, and reuse the last rendered result.
// https://reactjs.org/docs/react-api.html#reactmemo
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
