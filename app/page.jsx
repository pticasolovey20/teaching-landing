import LessonsTypesList from './components/lessons-types';
import Carousel from './components/carousel';

const Home = () => {
	return (
		<main className="min-h-[100svh] bg-gray-900/90">
			<section className="py-4 md:py-8 flex justify-center">
				<LessonsTypesList />
			</section>

			<section className="py-4 md:py-8">
				<Carousel />
			</section>
		</main>
	);
};

export default Home;
