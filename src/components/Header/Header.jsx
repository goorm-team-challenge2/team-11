import cn from 'classnames';

import $modalExpose from '@/recoil/atoms/modalExpose';
import $modalPage from '@/recoil/atoms/modalPage';
import { useSetRecoilState } from 'recoil';

import { Button, Typography } from '@goorm-dev/gds-challenge';

import styles from './Header.module.scss';

const Header = () => {
	const setModalPage = useSetRecoilState($modalPage);
	const setModalExpose = useSetRecoilState($modalExpose);

	return (
		<header className={cn(styles.header)}>
			<div className={cn(styles.contents)}>
				<Typography token="h5">
					구름톤 챌린지 참여자 정보 수집
				</Typography>
				<Button
					onClick={() => {
						setModalPage(0);
						setModalExpose(true);
					}}
					size="lg"
				>
					설문조사 참여하기
				</Button>
			</div>
		</header>
	);
};

export default Header;
