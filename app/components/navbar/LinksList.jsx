import { leftToRightSlide } from '@/app/animation';
import { motion } from 'framer-motion';

import Link from 'next/link';

const links = [
	{ id: 1, label: 'Home', href: '/' },
	{ id: 2, label: 'About', href: '/' },
	{ id: 3, label: 'Group Lessons', href: '/lessons' },
	{ id: 4, label: 'Pairs Lessons', href: '/lessons' },
	{ id: 5, label: 'Individual Lessons', href: '/lessons' },
	{ id: 6, label: 'Contact', href: '/' },
];

const LinksList = ({ navigationRef, setOpenSidebar }) => {
	return (
		<motion.div>
			<ul className="space-y-6" ref={navigationRef}>
				{links.map(({ id, label, href }) => (
					<motion.li
						key={id}
						custom={id}
						variants={leftToRightSlide}
						onClick={() => setOpenSidebar(false)}
						initial="initial"
						animate="enter"
						exit="exit"
						className="flex w-full"
					>
						<Link
							href={href}
							className="h-full w-full text-4xl font-bold text-[#FAF0E6]"
						>
							{label}
						</Link>
					</motion.li>
				))}
			</ul>
		</motion.div>
	);
};

export default LinksList;
