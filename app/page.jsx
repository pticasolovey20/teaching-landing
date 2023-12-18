import Section from './components/section/Section';

const Home = () => {
	return (
		<main className="min-h-[100svh] bg-[#FAF0E6]">
			<Section id="about" styles="pt-20 pb-10">
				<h2 className="font-bold text-4xl text-center">ABOUT</h2>
			</Section>

			<Section id="contact">
				<h2 className="font-bold text-4xl text-center">CONTACT</h2>
			</Section>
		</main>
	);
};

export default Home;
