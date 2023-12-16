import { classNames } from '@/utils/classNames';

import Image from 'next/image';

import PrevArrow from '@/assets/icons/prev-arrow.svg';
import NextArrow from '@/assets/icons/next-arrow.svg';

const CustomNavigation = ({ swiperRef }) => {
	return (
		<>
			<button
				onClick={() => swiperRef.current?.slidePrev()}
				className={classNames(
					'.swiper-button-prev',
					'hidden lg:block h-[40px] w-[40px]',
					'absolute top-[45%] left-[5%]'
				)}
			>
				<Image src={PrevArrow} alt="prev-arrow" className="w-full h-full" />
			</button>

			<button
				onClick={() => swiperRef.current?.slideNext()}
				className={classNames(
					'.swiper-button-prev',
					'hidden lg:block h-[40px] w-[40px]',
					'absolute top-[45%] right-[5%]'
				)}
			>
				<Image src={NextArrow} alt="next-arrow" className="w-full h-full" />
			</button>
		</>
	);
};

export default CustomNavigation;
