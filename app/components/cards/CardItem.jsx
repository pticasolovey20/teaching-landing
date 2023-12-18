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
				'flex flex-col',
				'gap-2 xs:gap-4 p-4 px-6',
				'basis-[300px] shrink-1 aspect-square',
				'rounded-xl select-none cursor-pointer',
				'shadow-md shadow-black bg-[#222222]'
			)}
		>
			<h1
				className={classNames(
					'text-4xl leading-none xs:text-5xl',
					'font-bold text-[#A3B1E6]'
				)}
			>
				{label}
			</h1>

			<p
				className={classNames(
					'my-4 xs:my-0',
					'text-sm xs:text-base',
					'font-semibold text-gray-400'
				)}
			>
				If the format works for you:
			</p>

			<ul className={classNames('mt-2 flex flex-col gap-1', 'font-semibold text-[#FFF2D8]')}>
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
