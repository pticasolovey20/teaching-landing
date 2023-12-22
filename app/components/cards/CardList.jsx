import CardItem from './CardItem';

const cards = [
	{
		id: 1,
		href: '/lessons',
		label: 'Pairs Lessons',
		description: ['couples', '60 minutes', '350 UAH'],
	},
	{
		id: 2,
		href: '/lessons',
		label: 'Group Lessons',
		description: ['4-6 persons', '60-90 minutes', '250-350 UAH'],
	},
	{
		id: 3,
		href: '/lessons',
		label: 'Individual Lessons',
		description: ['1 person', '60 minutes', '500 UAH'],
	},
];

const CardList = () => {
	return (
		<div className="flex justify-center gap-8 flex-wrap">
			{cards.map((card) => (
				<CardItem key={card.id} {...card} />
			))}
		</div>
	);
};

export default CardList;
