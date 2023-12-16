import Carousel from '@/components/shared/carousel/Carousel';

const Home = () => {
	return (
		<main className="min-h-[100svh] h-full bg-gray-900/90">
			<section className="px-2 py-1">
				<p className="text-white font-semibold">page is working</p>

				<Carousel />
			</section>
		</main>
	);
};

export default Home;
