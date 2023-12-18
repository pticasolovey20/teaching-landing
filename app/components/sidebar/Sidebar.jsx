'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { classNames } from '@/utils/classNames';

import Link from 'next/link';
import Image from 'next/image';

import close from '@/assets/icons/close.svg';
import menu from '@/assets/icons/menu.svg';

const links = [
	{ id: 1, label: 'About', href: '/' },
	{ id: 2, label: 'Group Lessons', href: '/' },
	{ id: 3, label: 'Pairs Lessons', href: '/' },
	{ id: 4, label: 'Individual Lessons', href: '/' },
	{ id: 5, label: 'Contact', href: '/' },
];

const slide = {
	initial: { x: -300, opacity: 0 },

	enter: (index) => ({
		x: 0,
		opacity: 1,
		transition: { duration: 0.5, delay: 0.05 * index },
	}),

	exit: (index) => ({
		x: -300,
		opacity: 0,
		transition: { duration: 0.5, delay: 0.05 * index },
	}),
};

const Sidebar = () => {
	const [open, setOpen] = useState(false);

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<section className="fixed flex min-h-[100svh] w-full sm:w-[350px]">
			<AnimatePresence>
				{open && (
					<motion.aside
						initial={{ width: 0 }}
						animate={{ width: '100%' }}
						exit={{ width: 0, transition: { delay: 0.5 } }}
						className="w-full z-10 min-h-[100svh] bg-[#292929]"
					>
						<motion.button
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0, transition: { delay: 0.25 } }}
							onClick={handleClose}
							className={classNames(
								'absolute top-4 left-4',
								'h-12 w-12 p-2 rounded-lg',
								'duaration-300 transform hover:scale-125'
							)}
						>
							<Image src={close} alt="close" className="h-full w-full" />
						</motion.button>
						<nav className="w-full mt-20 flex flex-col gap-8 p-8">
							{links.map(({ id, label, href }) => (
								<motion.div
									key={id}
									custom={id}
									variants={slide}
									initial="initial"
									animate="enter"
									exit="exit"
								>
									<Link href={href} className="font-bold text-4xl text-[#FAF0E6]">
										{label}
									</Link>
								</motion.div>
							))}
						</nav>
					</motion.aside>
				)}
			</AnimatePresence>

			<button
				onClick={handleOpen}
				className={classNames(
					'absolute top-4 left-4 h-10 w-10 p-1',
					'rounded-lg border-2 border-[#292929] bg-[#FAF0E6]'
				)}
			>
				<Image src={menu} alt="menu" className="h-full w-full" />
			</button>
		</section>
	);
};

export default Sidebar;
