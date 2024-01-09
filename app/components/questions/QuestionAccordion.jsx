import { AnimatePresence, motion } from 'framer-motion';
import { accordionToggle } from '@/app/animation';

import PlusIcon from '../icons/PlusIcon';

const QuestionAccordion = ({ id, question, answer, activeAccordion, handleToggle }) => {
	return (
		<div className="flex flex-col gap-2 py-3 px-4 rounded-xl bg-[#292929]">
			<div className="flex justify-between">
				<span className="text-lg font-semibold text-[#FAF0E6]">{question}</span>

				<motion.button
					key="trigger"
					initial={{ rotate: 0, scale: 1 }}
					animate={{
						rotate: activeAccordion === id ? 45 : 0,
						scale: activeAccordion === id ? 1.1 : 1,
					}}
					exit={{ rotate: 0, scale: 1 }}
					transition={{ duration: 0.3 }}
					onClick={() => handleToggle(id)}
				>
					<PlusIcon />
				</motion.button>
			</div>

			<AnimatePresence>
				{activeAccordion === id && (
					<motion.div
						key="content-container"
						initial="closed"
						animate="open"
						exit="closed"
						variants={accordionToggle}
						className="overflow-hidden"
					>
						<p className="text-gray-400">{answer}</p>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default QuestionAccordion;
