import React from 'react';
import Map from './Map';
import Sidebar from '../common/Sidebar';
import { Menu, MenuButton } from '../common/Menu';
import Header from '../common/Header';
import AreaList from './AreaList';
import IconButton from '../common/IconButton';
import { Camera } from '../Icons';
import Markers from '../common/Markers';
import ToastProvider from '../common/Toasts/ToastProvider';
import ToastButton from '../common/Toasts/ToastButton';
import ToastContainer from '../common/Toasts/ToastContainer';
import LocationsProvider from '../common/Locations/LocationsProvider';

const FinishedApp = () => {
	const [showSidebar, setShowsidebar] = React.useState(true);
	const messageDisplayRef = React.useRef();
	const takescreenshot = () => messageDisplayRef.current.takescreenshot();

	return (
		<LocationsProvider>
			<ToastProvider>
				<Header setShowsidebar={setShowsidebar} />
				<Map ref={messageDisplayRef}>
					<Markers />
				</Map>
				<Sidebar showSidebar={showSidebar}>
					<AreaList />
					<ToastButton />
				</Sidebar>
				<Menu>
					<MenuButton />
					<IconButton onClick={() => takescreenshot()}>
						<Camera />
					</IconButton>
				</Menu>
				<ToastContainer />
			</ToastProvider>
		</LocationsProvider>
	);
};

export default FinishedApp;
