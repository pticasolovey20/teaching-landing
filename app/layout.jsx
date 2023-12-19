import Navbar from './components/navbar/Navbar';
import './globals.css';

export const metadata = { title: 'Teaching Page' };

const RootLayout = ({ children }) => {
	return (
		<html lang="en">
			<body suppressHydrationWarning={true} className="min-h-screen bg-[#FAF0E6]">
				<Navbar />
				<main>{children}</main>
			</body>
		</html>
	);
};

export default RootLayout;
