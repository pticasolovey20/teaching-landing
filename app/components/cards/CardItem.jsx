import { classNames } from '@/app/utils/classNames';
import Link from 'next/link';

const colors = ['text-[#FFAE62]', 'text-[#A3B1E6]', 'text-[#7AE1BF]'];

const CardItem = ({ id: cardId, href, label, description }) => {
	return (
		<Link
			href={href}
			className={classNames(
				'flex flex-col justify-evenly gap-2',
				'basis-full md:basis-[300px] max-w-[400px]',
				'h-[300px] md:h-full md:aspect-square',
				'p-6 rounded-xl select-none cursor-pointer',
				'shadow-sm shadow-black bg-[#292929]'
			)}
		>
			<div className="flex flex-col gap-4">
				<h1
					className={classNames(
						'text-4xl xs:text-5xl leading-none font-bold',
						colors[cardId - 1]
					)}
				>
					{label}
				</h1>

				<p className="text-sm xs:text-base font-semibold text-gray-400">
					If the format works for you:
				</p>
			</div>

			<ul className="mt-2 flex flex-col gap-1">
				{description.map((element) => (
					<li key={element} className="h-8 flex items-center gap-3">
						<div className="w-6 h-6 rounded-full bg-gray-400 shadow-md shadow-black" />
						<p className="font-semibold text-[#FFF2D8]">{element}</p>
					</li>
				))}
			</ul>
		</Link>
	);
};

export default CardItem;
