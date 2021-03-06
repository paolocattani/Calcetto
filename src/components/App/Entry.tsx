import React, { StrictMode, Suspense } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../../redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { LoadingModal } from '../core/generic/Commons';

const Application: React.FC = () => (
	<Provider store={store}>
		<PersistGate loading={<LoadingModal show={true} />} persistor={persistor}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</PersistGate>
	</Provider>
);
const Entry: React.FC = () => (
	<Suspense fallback={<LoadingModal />}>
		{process.env.NODE_ENV !== 'production' ? (
			<StrictMode>
				<Application />
			</StrictMode>
		) : (
			<Application />
		)}
	</Suspense>
);

export default Entry;
