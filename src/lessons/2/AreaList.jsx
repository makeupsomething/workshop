import React from 'react';
import { promise } from '../../utils/network';
import { AreaInfo, AreaList } from '../../common/AreaInfo';
import Spinner from '../../common/Spinner';
import Error from '../../common/Error';
// import { LocationsContext } from '../../common/Locations/LocationsProvider';

// an insitaial state for the reducer
export const initialState = { status: 'idle', locations: [], error: null };

// our reducer function that can be used with use reducer
// this pattern is familar if you have used redux
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
	//use this later
	// const [state, dispatch] = React.useContext(LocationsContext);

	// useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one.
	// useReducer also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.
	// https://reactjs.org/docs/hooks-reference.html#usereducer
	const [state, dispatch] = React.useReducer(reducer, initialState);

	// the types of status
	const { status, locations, error } = state;

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
