import { classNames } from '@/utils/classNames';

const CardItem = ({ label }) => {
	return (
		<div
			className={classNames(
				'h-[400px]',
				'flex items-center justify-center',
				'rounded-lg bg-white select-none'
			)}
		>
			<p className="font-semibold">{label}</p>
		</div>
	);
};

export default CardItem;
