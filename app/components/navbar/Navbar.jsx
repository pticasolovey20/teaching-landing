'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { asideToggle } from '@/app/animation';
import { classNames } from '@/utils/classNames';

import Header from './Header';
import CloseIcon from '../icons/CloseIcon';
import LinksList from './LinksList';
import Socials from './Socials';

const Navbar = () => {
	const [openSidebar, setOpenSidebar] = useState(false);
	const [hiddenHeader, setHiddenHeader] = useState(false);

	const navigationRef = useRef();
	const { scrollY } = useScroll();

	useMotionValueEvent(scrollY, 'change', (latest) => {
		const previous = scrollY.getPrevious();

		if (latest > previous && latest > 150) {
			setHiddenHeader(true);
		} else {
			setHiddenHeader(false);
		}
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
			<Header
				hiddenHeader={hiddenHeader}
				openSidebar={openSidebar}
				setOpenSidebar={setOpenSidebar}
			/>
			<AnimatePresence>
				{openSidebar && (
					<motion.aside
						key="mobile-navigation"
						initial="closed"
						animate="open"
						exit="closed"
						variants={asideToggle}
						className={classNames(
							'fixed inset-0 h-screen w-full sm:w-[350px]',
							'flex flex-col space-y-10 p-6 bg-[#292929] shadow-md shadow-black'
						)}
					>
						<button onClick={() => setOpenSidebar(false)} className="h-10 w-10 -ml-2">
							<CloseIcon strokeColor="#FAF0E6" className="w-10 h-10" />
						</button>

						<LinksList navigationRef={navigationRef} setOpenSidebar={setHiddenHeader} />
						<motion.div className="w-full h-px bg-gray-400" />
						<Socials />
					</motion.aside>
				)}
			</AnimatePresence>
		</>
	);
};

export default Navbar;
