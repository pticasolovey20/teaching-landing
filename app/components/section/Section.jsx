import { classNames } from '@/utils/classNames';

const Section = ({ children, id, styles }) => {
	return (
		<section id={id} className={classNames('flex justify-center px-4 py-6', styles)}>
			<div
				className={classNames(
					'h-[700px] w-full md:w-[80%] xl:w-[60%]',
					'rounded-3xl border-2 border-black',
					'shadow-[0px_0px_15px_2px] shadow-black/75'
				)}
			>
				{children}
			</div>
		</section>
	);
};

export default Section;
