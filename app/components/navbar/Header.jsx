import { motion } from 'framer-motion';
import { classNames } from '@/utils/classNames';

import MenuIcon from '../icons/MenuIcon';

const Header = ({ hiddenHeader, openSidebar, setOpenSidebar }) => {
	return (
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
						<MenuIcon strokeColor="#FAF0E6" />
					</button>
				)}
			</div>
		</motion.header>
	);
};

export default Header;
