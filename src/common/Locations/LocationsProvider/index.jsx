import React, { createContext } from 'react';
import { promise } from '../../../utils/network';

const LocationsContext = createContext(null);
LocationsContext.displayName = 'LocationsContext';

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

const LocationsProvider = ({ children }) => {
	const [state, dispatch] = React.useReducer(reducer, initialState);

	React.useEffect(() => {
		dispatch({ type: 'SET_STATUS', payload: 'pending' });
		promise.then(
			({ data }) => {
				console.log(data);
				dispatch({ type: 'SET_LOCATIONS', payload: data });
				dispatch({ type: 'SET_STATUS', payload: 'resolved' });
				console.log(data);
			},
			({ error }) => {
				console.log('i am error');
				dispatch({ type: 'SET_ERROR', payload: error });
				dispatch({ type: 'SET_STATUS', payload: 'rejected' });
				console.error(error);
			},
		);
	}, []);

	return (
		<LocationsContext.Provider value={[state, dispatch]}>
			{children}
		</LocationsContext.Provider>
	);
};

export { LocationsContext };
export default LocationsProvider;
