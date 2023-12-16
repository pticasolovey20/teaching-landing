import { useSwiperSlide } from 'swiper/react';
import { classNames } from '@/utils/classNames';

const CardItem = ({ label }) => {
	const { isActive: activeSlide, isPrev: prevSlide, isNext: nextSlide } = useSwiperSlide();

	return (
		<div
			className={classNames(
				'h-[300px] flex items-center',
				'rounded-lg select-none overflow-hidden',
				prevSlide && 'justify-center sm:justify-end',
				nextSlide && 'justify-center sm:justify-start',
				activeSlide ? 'justify-center bg-red-400' : 'bg-white'
			)}
		>
			<p className="font-semibold">{label}</p>
		</div>
	);
};

export default CardItem;
