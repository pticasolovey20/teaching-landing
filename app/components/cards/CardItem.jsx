import { classNames } from '@/utils/classNames';

import Image from 'next/image';

import person from '@/assets/icons/person.svg';
import clock from '@/assets/icons/clock.svg';
import dollar from '@/assets/icons/dollar.svg';

const icons = [
	{ src: person, alt: 'person' },
	{ src: clock, alt: 'clock' },
	{ src: dollar, alt: 'dollar' },
];

const CardItem = ({ label, description }) => {
	return (
		<div
			className={classNames(
				'flex flex-col justify-center gap-2',
				'self-center p-4 md:p-8 px-8 rounded-3xl',
				'w-full max-h-[350px] max-w-[350px] aspect-square',
				'select-none cursor-pointer overflow-hidden',
				'shadow-lg shadow-black bg-[#222222]'
			)}
		>
			<h1
				className={classNames(
					'text-[42px] leading-none xs:text-6xl',
					'font-bold text-[#A3B1E6]'
				)}
			>
				{label}
			</h1>

			<p className="mt-2 font-semibold text-gray-400">If the format works for you:</p>

			<ul className={classNames('mt-2 flex flex-col gap-2', 'font-semibold text-[#FFF2D8]')}>
				{description.map((element, index) => (
					<li key={index} className="h-8 flex items-center gap-3">
						<Image
							priority
							src={icons[index].src}
							alt={icons[index].alt}
							className="h-full w-auto"
						/>

						<p>{element}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default CardItem;
