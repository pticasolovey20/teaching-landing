import CardList from './components/cards/CardList';
import QuestionList from './components/questions/QuestionList';

const Home = () => {
	return (
		<main className="flex-1">
			<section id="" className="flex justify-center px-6 py-10 pb-6">
				<div className="w-full md:w-[90%] xl:w-[80%]">
					<CardList />
				</div>
			</section>

			<section id="" className="flex flex-col items-center gap-8 p-6">
				<h2 className="text-4xl font-bold text-[#FAF0E6]">FAQ Questions</h2>

				<div className="w-full sm:w-[90%] md:w-[80%] xl:w-[60%] xxl:w-[50%]">
					<QuestionList />
				</div>
			</section>
		</main>
	);
};

export default Home;
