import React from 'react';
import Map from './Map';
import Sidebar from '../../common/Sidebar';
import Header from '../../common/Header';
import Areas from './AreaList';
import Markers from '../../common/Markers';
import LocationsProvider from '../../common/Locations/LocationsProvider';
import { Menu, MenuButton } from '../../common/Menu';
import ToastProvider from '../../common/Toasts/ToastProvider';
import ToastButton from '../../common/Toasts/ToastButton';
import ToastContainer from '../../common/Toasts/ToastContainer';
// import IconButton from '../../common/IconButton';
// import { Camera } from '../../Icons';

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
					<Areas />
					<ToastButton />
				</Sidebar>
				<Menu>
					<MenuButton />
					{/* <IconButton onClick={() => takescreenshot()}>
						<Camera />
					</IconButton> */}
				</Menu>
				<ToastContainer />
			</ToastProvider>
		</LocationsProvider>
	);
};

export default FinishedApp;
