import { classNames } from '@/utils/classNames';

const Loader = ({ styles }) => {
	return (
		<div className={classNames(styles, 'flex items-center justify-center')}>
			<p className="font-semibold text-white">LOADING..</p>
		</div>
	);
};

export default Loader;
