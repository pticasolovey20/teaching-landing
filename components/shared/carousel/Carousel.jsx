'use client';

import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaQuery } from '@/utils/useMediaQuery';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import CardItem from '../card-item/CardItem';
import CustomNavigation from '../navigation/CustomNavigation';
import CustomPagination from '../pagination/CustomPagination';
import Loader from '../loader/Loader';

import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';

const slides = [
	{ id: 1, label: 'SLIDE-1' },
	{ id: 2, label: 'SLIDE-2' },
	{ id: 3, label: 'SLIDE-3' },
	{ id: 4, label: 'SLIDE-4' },
	{ id: 5, label: 'SLIDE-5' },
];

const Carousel = () => {
	const [mounted, setMounted] = useState(false);

	const swiperRef = useRef();

	const { matches: tablet } = useMediaQuery('min-width', 768);
	const { matches: mobile } = useMediaQuery('max-width', 640);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return <Loader styles="h-[300px]" />;

	return (
		<div className="relative">
			<Swiper
				effect="coverflow"
				coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5 }}
				loop={true}
				grabCursor={true}
				centeredSlides={true}
				slidesPerView={mobile ? 1 : 2}
				spaceBetween={tablet ? 40 : 20}
				className="w-[90%] lg:w-[80%] xl:w-[70%] xxl:w-[60%]"
				slideClass="swiper-slide"
				modules={[EffectCoverflow, Pagination, Navigation]}
				onBeforeInit={(swiper) => (swiperRef.current = swiper)}
				pagination={{ el: '.swiper-pagination', clickable: true }}
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
			<CustomPagination />
		</div>
	);
};

export default Carousel;
