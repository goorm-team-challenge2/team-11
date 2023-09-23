import { useState } from 'react';
import cn from 'classnames';

import { Card } from '@/components';
import useLocalStorage from '@/hooks/useLocalStorage';
import $participantInfos from '@/recoil/atoms/participantInfos';

import { Collapse, Typography } from '@goorm-dev/gds-challenge';

import styles from './ListView.module.scss';

const ListView = () => {
	const { sessionValue: infos } = useLocalStorage($participantInfos);

	return (
		<Collapse isOpen>
			<Card style={{ borderTop: 0 }} flat="top">
				{`응답한 참여자 ${infos.length}`}
			</Card>
			{infos.map((info, index) => {
				return (
					<Card
						key={info.firstPageInfo.name}
						style={{ borderTop: 0 }}
						flat="both"
					>
						{`참여자 ${index + 1}. ${info.firstPageInfo.name}`}
					</Card>
				);
			})}
		</Collapse>
	);
};

export default ListView;
