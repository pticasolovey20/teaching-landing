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
