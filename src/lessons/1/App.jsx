import React from 'react';
import Map from './Map';
import Sidebar from '../../common/Sidebar';
import Header from '../../common/Header';

const FinishedApp = () => {
	//useState can hold some state for us in a component
	//const [showSidebar, setShowsidebar] = React.useState(true);

	//Pass the setShowsidebar function and showSidebar state down to the Header and Sidebar
	return (
		<>
			<Header />
			<Map />
			<Sidebar />
		</>
	);
};

export default FinishedApp;
