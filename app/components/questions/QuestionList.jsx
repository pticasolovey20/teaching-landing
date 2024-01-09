'use client';

import { useState } from 'react';
import QuestionAccordion from './QuestionAccordion';

const questions = [
	{
		id: 1,
		question: 'What is Lorem Ipsum?',
		answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus, elit ut faucibus ornare, sapien leo faucibus tortor, vehicula dignissim ipsum velit sed lorem.',
	},
	{
		id: 2,
		question: 'Why do we use it?',
		answer: 'Proin nunc ipsum, aliquet at consectetur ut, feugiat ut leo. Vivamus vitae dui ex. Donec blandit tincidunt arcu.',
	},
	{
		id: 3,
		question: 'Where does it come from?',
		answer: 'Proin ultricies dolor vitae elit condimentum efficitur. In mauris nunc, sagittis a feugiat et, vestibulum a justo. Praesent ut risus non ligula aliquet aliquet vel nec dui. Etiam tincidunt',
	},
	{
		id: 4,
		question: 'Where can I get some?',
		answer: 'Praesent vehicula felis quis nisl tempor tempor. Etiam viverra suscipit purus. Morbi vel est ex. In lobortis, tortor at malesuada convallis, velit odio tempus dolor, vitae laoreet sapien eros sit amet lorem.',
	},
];

const QuestionList = () => {
	const [activeAccordion, setActiveAccordion] = useState(null);

	const handleToggle = (id) => {
		setActiveAccordion(activeAccordion === id ? null : id);
	};

	return (
		<div className="flex flex-col gap-4">
			{questions.map((accordion) => (
				<QuestionAccordion
					key={accordion.id}
					{...accordion}
					activeAccordion={activeAccordion}
					handleToggle={handleToggle}
				/>
			))}
		</div>
	);
};

export default QuestionList;
