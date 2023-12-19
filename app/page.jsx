import Section from './components/section/Section';

const Home = () => {
	return (
		<>
			<Section id="about">
				<h2 className="font-bold text-4xl text-center">ABOUT</h2>
			</Section>

			<Section id="contact">
				<h2 className="font-bold text-4xl text-center">CONTACT</h2>
			</Section>
		</>
	);
};

export default Home;
