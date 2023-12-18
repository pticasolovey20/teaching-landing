import Sidebar from './components/sidebar/Sidebar';
import './globals.css';

export const metadata = {
	title: 'Teaching Page',
	description: '',
};

const RootLayout = ({ children }) => {
	return (
		<html lang="en">
			<body suppressHydrationWarning={true}>
				<Sidebar />
				{children}
			</body>
		</html>
	);
};

export default RootLayout;
