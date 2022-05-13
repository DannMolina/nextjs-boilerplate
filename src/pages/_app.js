// * redux
import { Provider } from 'react-redux';

// * store config
import store from 'store';

// * css
import '../../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
}
