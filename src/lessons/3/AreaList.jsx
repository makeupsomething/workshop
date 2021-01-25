import React from 'react';
import { LocationsContext } from '../../common/Locations/LocationsProvider';
import { AreaInfo, AreaList } from '../../common/AreaInfo';
import Spinner from '../../common/Spinner';
import Error from '../../common/Error';

export const initialState = { status: 'idle', locations: [], error: null };

export function reducer(state, action) {
	switch (action.type) {
		case 'SET_STATUS':
			return { ...state, status: action.payload };
		case 'SET_LOCATIONS':
			return { ...state, locations: action.payload };
		case 'SET_ERROR':
			return { ...state, error: action.payload };
		default:
			throw new Error();
	}
}

const Areas = () => {
	const [state, dispatch] = React.useContext(LocationsContext);
	const { status, locations, error } = state;

	if (status === 'idle') {
		return null;
	} else if (status === 'pending') {
		return <Spinner />;
	} else if (status === 'rejected') {
		return <Error />;
	} else if (status === 'resolved') {
		return (
			<AreaList>
				{locations.map((location) => (
					<AreaInfo key={location.id}>{location.name}</AreaInfo>
				))}
			</AreaList>
		);
	}

	throw new Error('This should be impossible');
};

export default Areas;
