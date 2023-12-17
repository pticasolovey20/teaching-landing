import { classNames } from '@/utils/classNames';

import CardItem from './CardItem';

const cards = [
	{ id: 1, label: 'Pairs Lessons', description: ['couples', '60 minutes', '350 UAH'] },
	{ id: 2, label: 'Group Lessons', description: ['4-6 persons', '60-90 minutes', '250-350 UAH'] },
	{ id: 3, label: 'Individual Lessons', description: ['1 person', '60 minutes', '500 UAH'] },
];

const CardList = () => {
	return (
		<section className="flex justify-center p-8">
			<div
				className={classNames(
					'flex justify-center gap-12',
					'flex-col sm:flex-row flex-wrap',
					'w-full lg:w-[90%]'
				)}
			>
				{cards.map((card) => (
					<CardItem key={card.id} {...card} />
				))}
			</div>
		</section>
	);
};

export default CardList;
