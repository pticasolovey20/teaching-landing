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
				<main className="min-h-screen bg-[#FAF0E6]">{children}</main>
			</body>
		</html>
	);
};

export default RootLayout;
