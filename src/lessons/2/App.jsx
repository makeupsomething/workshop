import React from 'react';
import Map from './Map';
import Sidebar from '../../common/Sidebar';
import Header from '../../common/Header';
import Areas from './AreaList';
import Markers from '../../common/Markers';

const FinishedApp = () => {
	const [showSidebar, setShowsidebar] = React.useState(true);

	return (
		<>
			<Header setShowsidebar={setShowsidebar} />
			<Map>{/* <Markers /> */}</Map>
			<Sidebar showSidebar={showSidebar}>{/* <Areas /> */}</Sidebar>
		</>
	);
};

export default FinishedApp;
