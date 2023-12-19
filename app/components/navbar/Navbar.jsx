'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useCycle, useMotionValueEvent, useScroll } from 'framer-motion';
import { leftToRightSlide } from '@/app/animation';
import { classNames } from '@/utils/classNames';

import Link from 'next/link';
import Image from 'next/image';
import Socials from './Socials';

import menu from '@/assets/icons/menu.svg';
import close from '@/assets/icons/close.svg';

const links = [
	{ id: 1, label: 'Home', href: '/' },
	{ id: 2, label: 'About', href: '/#about' },
	{ id: 3, label: 'Group Lessons', href: '/lessons' },
	{ id: 4, label: 'Pairs Lessons', href: '/lessons' },
	{ id: 5, label: 'Individual Lessons', href: '/lessons' },
	{ id: 6, label: 'Contact', href: '/#contact' },
];

const Navbar = () => {
	const [openSidebar, setOpenSidebar] = useState(false);
	const [hiddenHeader, setHiddenHeader] = useState(false);
	const navigationRef = useRef();
	const { scrollY } = useScroll();

	useMotionValueEvent(scrollY, 'change', (latest) => {
		const previous = scrollY.getPrevious();

		latest > previous && latest > 150 ? setHiddenHeader(true) : setHiddenHeader(false);
	});

	useEffect(() => {
		const toogleClickOutside = (event) => {
			if (!navigationRef?.current?.contains(event.target)) {
				setOpenSidebar(false);
			}
		};

		document.addEventListener('mousedown', toogleClickOutside);
		return () => document.removeEventListener('mousedown', toogleClickOutside);
	});

	return (
		<nav className="sticky top-4 inset-0 h-14">
			<motion.div
				transition={{ duration: 0.35, ease: 'easeInOut' }}
				variants={{ visible: { y: 0 }, hidden: { y: '-150%' } }}
				animate={openSidebar ? 'hidden' : hiddenHeader ? 'hidden' : 'visible'}
				className="h-full px-4 flex justify-center items-center"
			>
				<div
					className={classNames(
						'reltive h-full w-full max-w-[500px]',
						'rounded-[30px] bg-[#292929] bg-opacity-90'
					)}
				>
					{!openSidebar && (
						<button
							className="relative top-3 left-4 w-8 h-8"
							onClick={() => setOpenSidebar(true)}
						>
							<Image src={menu} alt="menu" className="w-full h-full" />
						</button>
					)}
				</div>
			</motion.div>

			<AnimatePresence>
				{openSidebar && (
					<motion.div
						key="mobile-navigation"
						initial="closed"
						animate="open"
						exit="closed"
						variants={{
							open: {
								x: '0%',
								transition: { when: 'beforeChildren', duration: 0.3 },
							},

							closed: {
								x: '-100%',
								transition: { when: 'afterChildren', duration: 0.3 },
							},
						}}
						className="fixed inset-0 space-y-10 w-full sm:w-[350px] flex flex-col p-6 bg-[#292929]"
					>
						<button onClick={() => setOpenSidebar(false)} className="h-10 w-10">
							<Image src={close} alt="close" className="w-full h-full" />
						</button>

						<motion.div>
							<ul className="space-y-6" ref={navigationRef}>
								{links.map(({ id, label, href }) => (
									<motion.li
										key={id}
										custom={id}
										variants={leftToRightSlide}
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

						<motion.div className="w-full h-px bg-gray-400" />

						<Socials />
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
};

export default Navbar;
