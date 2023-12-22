export const leftToRightSlide = {
	initial: { x: -300, opacity: 0 },

	enter: (index) => ({
		x: 0,
		opacity: 1,
		transition: { duration: 0.5, delay: 0.1 * index },
	}),

	exit: (index) => ({
		x: -300,
		opacity: 0,
		transition: { duration: 0.5, delay: 0.1 * index },
	}),
};

export const asideToggle = {
	open: {
		x: '0%',
		transition: { when: 'beforeChildren', duration: 0.3 },
	},

	closed: {
		x: '-100%',
		transition: { when: 'afterChildren', duration: 0.3 },
	},
};
