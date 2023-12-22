import { motion } from 'framer-motion';
import { classNames } from '@/utils/classNames';

const socials = [
	{ id: 1, href: '/' },
	{ id: 2, href: '/' },
	{ id: 3, href: '/' },
];

const Socials = () => {
	return (
		<motion.div>
			<ul className="flex items-center gap-x-6">
				{socials.map(({ id }) => (
					<li key={id}>
						<div
							className={classNames(
								'w-12 h-12 rounded-full',
								'flex items-center justify-center',
								'text-xl text-[#FAF0E6] font-semibold',
								'shadow-md shadow-black bg-gray-400 cursor-pointer'
							)}
						/>
					</li>
				))}
			</ul>
		</motion.div>
	);
};

export default Socials;
