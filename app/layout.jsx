import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

import './globals.css';

export const metadata = { title: 'Teaching Page' };

const RootLayout = ({ children }) => {
	return (
		<html lang="en">
			<body
				suppressHydrationWarning={true}
				className="min-h-screen flex flex-col bg-gradient-to-b from-[#16161C] to-[#3e3e46]"
			>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
};

export default RootLayout;
