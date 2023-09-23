import { useState } from 'react';

import $modalExpose from '@/recoil/atoms/modalExpose';
import $modalPage from '@/recoil/atoms/modalPage';
import $thirdPageInfo from '@/recoil/atoms/thirdPageInfo';
import { useSetRecoilState } from 'recoil';

import {
	Button,
	CarouselIndicators,
	Modal,
	Typography,
} from '@goorm-dev/gds-challenge';

const ModalThirdPage = () => {
	const setModalPage = useSetRecoilState($modalPage);
	const setModalExpose = useSetRecoilState($modalExpose);

	const [info, setinfo] = useState(null);

	const setThirdPageInfo = useSetRecoilState($thirdPageInfo);

	return (
		<div>
			<Modal isOpen>
				<Modal.Header
					toggle={() => {
						setModalExpose(false);
					}}
					style={{
						width: '100%',
						padding: '16px 24px',
					}}
				/>
				<Modal.Body>
					<div>
						<Typography weight={700} color="dark" token="h4">
							오프라인 팀 챌린지에 가장 기대하는 점은 무엇인가요?
						</Typography>
						<Typography weight={700} color="hint">
							더 좋은 챌린지가 될 수 있도록 데이터를 수집하려고
							해요.
						</Typography>
					</div>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'flex-start',
							gap: '16px',
							padding: '32px 40px',
						}}
					>
						<Button
							color="link"
							style={{
								display: 'flex',
								alignItems: 'start',
								width: '100%',
							}}
							active={info === 0}
							onClick={() => {
								setinfo(info === 0 ? null : 0);
							}}
						>
							1. 정해진 시간 내에 오프라인 팀 챌린지 과제를 수행
						</Button>
						<Button
							color="link"
							style={{
								display: 'flex',
								alignItems: 'start',
								width: '100%',
							}}
							active={info === 1}
							onClick={() => {
								setinfo(info === 1 ? null : 1);
							}}
						>
							2. 정해진 시간 내에 오프라인 팀 챌린지 과제를 수행
						</Button>
						<Button
							color="link"
							style={{
								display: 'flex',
								alignItems: 'start',
								width: '100%',
							}}
							active={info === 2}
							onClick={() => {
								setinfo(info === 2 ? null : 2);
							}}
						>
							3. 정해진 시간 내에 오프라인 팀 챌린지 과제를 수행
						</Button>
						<Button
							color="link"
							style={{
								display: 'flex',
								alignItems: 'start',
								width: '100%',
							}}
							active={info === 3}
							onClick={() => {
								setinfo(info === 3 ? null : 3);
							}}
						>
							4. 정해진 시간 내에 오프라인 팀 챌린지 과제를 수행
						</Button>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
							padding: '16px 24px',
							width: '100%',
						}}
					>
						<CarouselIndicators length={4} activeIndex={2} />
						<div
							style={{
								display: 'flex',
								gap: '8px',
							}}
						>
							<Button
								color="link"
								onClick={() => {
									setModalPage(1);
								}}
							>
								이전
							</Button>
							<Button
								content="end"
								disabled={info === null}
								onClick={() => {
									// 데이터 저장하고 다음 페이지 넘어가기
									setThirdPageInfo(info);
									setModalPage(3);
								}}
							>
								다음
							</Button>
						</div>
					</div>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default ModalThirdPage;
