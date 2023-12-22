import { classNames } from '@/utils/classNames';

const Section = ({ children, id, styles }) => {
	return (
		<section id={id} className={classNames('flex justify-center px-6 py-10 pb-6', styles)}>
			<div className="w-full md:w-[90%] xl:w-[80%]">{children}</div>
		</section>
	);
};

export default Section;
