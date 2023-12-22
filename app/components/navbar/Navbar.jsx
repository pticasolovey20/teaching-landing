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
	{ id: 2, label: 'About', href: '/' },
	{ id: 3, label: 'Group Lessons', href: '/lessons' },
	{ id: 4, label: 'Pairs Lessons', href: '/lessons' },
	{ id: 5, label: 'Individual Lessons', href: '/lessons' },
	{ id: 6, label: 'Contact', href: '/' },
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
		<>
			<motion.header
				transition={{ duration: 0.35, ease: 'easeInOut' }}
				variants={{ visible: { y: 0 }, hidden: { y: '-150%' } }}
				animate={openSidebar ? 'hidden' : hiddenHeader ? 'hidden' : 'visible'}
				className="sticky top-4 inset-0 h-14 w-full flex justify-center items-center px-6"
			>
				<div
					className={classNames(
						'reltive h-full w-full max-w-[500px] rounded-[30px]',
						'rounded-[30px] bg-[rgba(255,255,255,0.1)] backdrop-blur-[5px] shadow-sm shadow-black'
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
			</motion.header>

			<AnimatePresence>
				{openSidebar && (
					<motion.aside
						key="mobile-navigation"
						initial="closed"
						animate="open"
						exit="closed"
						className={classNames(
							'fixed inset-0 h-screen w-full sm:w-[350px]',
							'flex flex-col space-y-10 p-6 bg-[#292929] shadow-md shadow-black'
						)}
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
					>
						<button onClick={() => setOpenSidebar(false)} className="h-10 w-10 -ml-2">
							<Image src={close} alt="close" className="w-full h-full" />
						</button>

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

						<motion.div className="w-full h-px bg-gray-400" />

						<Socials />
					</motion.aside>
				)}
			</AnimatePresence>
		</>
	);
};

export default Navbar;
