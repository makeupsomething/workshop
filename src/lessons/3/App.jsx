import React from 'react';
import Map from './Map';
import Sidebar from '../../common/Sidebar';
import Header from '../../common/Header';
import Areas from './AreaList';
import Markers from '../../common/Markers';
import LocationsProvider from '../../common/Locations/LocationsProvider';
// import { Menu, MenuButton } from '../../common/Menu';

const FinishedApp = () => {
	const [showSidebar, setShowsidebar] = React.useState(true);

	return (
		<LocationsProvider>
			<Header setShowsidebar={setShowsidebar} />
			<Map>
				<Markers />
			</Map>
			<Sidebar showSidebar={showSidebar}>
				<Areas />
			</Sidebar>
			{/* <Menu>
				<MenuButton />
			</Menu> */}
		</LocationsProvider>
	);
};

export default FinishedApp;
