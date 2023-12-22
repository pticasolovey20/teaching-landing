import { classNames } from '@/utils/classNames';

const Section = ({ children, id, outerStyles, innerStyles }) => {
	return (
		<section id={id} className={classNames('flex justify-center px-6 py-10 pb-6', outerStyles)}>
			<div className={classNames('w-full md:w-[90%] xl:w-[80%]', innerStyles)}>
				{children}
			</div>
		</section>
	);
};

export default Section;
