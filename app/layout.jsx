import './globals.css';

export const metadata = {
	title: 'Teach Page',
	description: '',
};

const RootLayout = ({ children }) => {
	return (
		<html lang="en">
			<body suppressHydrationWarning={true}>{children}</body>
		</html>
	);
};

export default RootLayout;
