import Link from 'next/link';

import { classNames } from '@/utils/classNames';
import { lessonsTypes } from './constants';

const LessonsTypesList = () => {
	return (
		<div className={classNames('flex', 'w-[90%] lg:w-[80%] xl:w-[70%] xxl:w-[60%]')}>
			<div className="flex flex-col gap-8 select-none">
				{lessonsTypes.map((lessonType) => (
					<div key={lessonType.id} className="flex gap-4">
						<div
							className={classNames(
								'w-[30px] md:w-[35px]',
								'h-[30px] md:h-[35px]',
								'shrink-0 p-1 rounded-md',
								'border-2 border-red-400 bg-gray-400'
							)}
						/>

						<div className="flex flex-col gap-2">
							<h1
								className={classNames(
									'tracking-tighter font-semibold text-red-400',
									'text-md lg:text-xl'
								)}
							>
								{lessonType.label}
							</h1>

							<p
								className={classNames(
									'tracking-tighter text-gray-500',
									'text-md md:text-lg'
								)}
							>
								{lessonType.content}
							</p>

							<Link
								href={lessonType.route}
								className={classNames(
									'mt-2 px-4 py-1 w-fit',
									'self-start sm:self-end',
									'font-semibold text-[16px] text-white',
									'rounded-lg border border-gray-400',
									'hover:text-red-400 hover:border-red-400 duration-500'
								)}
							>
								DETAILS..
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default LessonsTypesList;