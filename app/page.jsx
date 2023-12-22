import Section from './components/section/Section';
import CardList from './components/cards/CardList';

const Home = () => {
	return (
		<main className="flex-1">
			<Section>
				<CardList />
			</Section>
		</main>
	);
};

export default Home;
