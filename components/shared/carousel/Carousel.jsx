'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaQuery } from '@/utils/useMediaQuery';
import { EffectCoverflow, Navigation } from 'swiper/modules';

import CardItem from '../card-item/CardItem';
import CustomNavigation from '../navigation/CustomNavigation';

import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css';

const slides = [
	{ id: 1, label: 'SLIDE-1' },
	{ id: 2, label: 'SLIDE-2' },
	{ id: 3, label: 'SLIDE-3' },
	{ id: 4, label: 'SLIDE-4' },
	{ id: 5, label: 'SLIDE-5' },
];

const Carousel = () => {
	const swiperRef = useRef();

	const { matches: desctop } = useMediaQuery('min-width', 1280);
	const { matches: tablet } = useMediaQuery('min-width', 768);
	const { matches: mobile } = useMediaQuery('max-width', 640);

	return (
		<div className="relative mt-12">
			<Swiper
				effect="coverflow"
				coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5 }}
				loop={true}
				grabCursor={true}
				centeredSlides={true}
				slidesPerView={mobile ? 1 : 2}
				spaceBetween={desctop ? 120 : tablet ? 90 : 50}
				className="w-[90%] lg:w-[80%]"
				modules={[EffectCoverflow, Navigation]}
				onBeforeInit={(swiper) => (swiperRef.current = swiper)}
				navigation={{
					prevEl: '.swiper-button-prev',
					nextEl: '.swiper-button-next',
				}}
			>
				{slides.map((slide) => (
					<SwiperSlide key={slide.id}>
						<CardItem {...slide} />
					</SwiperSlide>
				))}
			</Swiper>

			<CustomNavigation swiperRef={swiperRef} />
		</div>
	);
};

export default Carousel;
