import CardList from './components/cards/CardList';
import Sidebar from './components/sidebar/Sidebar';

const Home = () => {
	return (
		<main className="min-h-[100svh] bg-[#FAF0E6]">
			<Sidebar />

			<section className="flex justify-center pt-20 px-8">
				<CardList />
			</section>
		</main>
	);
};

export default Home;
