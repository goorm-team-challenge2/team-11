import cn from 'classnames';

import { Card, Header } from '@/components';
import ModalFirstPage from '@/components/ModalFirstPage/ModalFirstPage';
import useLocalStorage from '@/hooks/useLocalStorage';
import $firstPageInfo from '@/recoil/atoms/firstPageInfo';
import $participantInfos from '@/recoil/atoms/participantInfos';
import { useRecoilValue } from 'recoil';

import { Typography } from '@goorm-dev/gds-challenge';

import EmptyView from '../EmptyView/EmptyView';
import ListView from '../ListView/ListView';
import ModalView from '../ModalView/ModalView';

import styles from './View.module.scss';

const View = () => {
	const { sessionValue: infos } = useLocalStorage($participantInfos);

	return (
		<>
			<Header />
			<main className={styles.main}>
				{infos && infos.length > 0 ? <ListView /> : <EmptyView />}
			</main>
			<ModalView />
		</>
	);
};

export default View;
