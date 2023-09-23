import cn from 'classnames';

import { Card, Header } from '@/components';
import ModalFirstPage from '@/components/ModalFirstPage/ModalFirstPage';
import $participantsInfo from '@/recoil/atoms/participantsInfo';
import { useRecoilValue } from 'recoil';

import { Typography } from '@goorm-dev/gds-challenge';

import EmptyView from '../EmptyView/EmptyView';
import ListView from '../ListView/ListView';
import ModalView from '../ModalView/ModalView';

import styles from './View.module.scss';

const View = () => {
	const participantsInfo = useRecoilValue($participantsInfo);

	return (
		<>
			<Header />
			<main className={styles.main}>
				{participantsInfo && participantsInfo.length > 0 ? (
					<ListView />
				) : (
					<EmptyView />
				)}
			</main>
			<ModalView />
		</>
	);
};

export default View;
