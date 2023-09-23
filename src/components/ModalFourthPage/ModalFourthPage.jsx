import { useState } from 'react';

import useLocalStorage from '@/hooks/useLocalStorage';
import $firstPageInfo from '@/recoil/atoms/firstPageInfo';
import $modalExpose from '@/recoil/atoms/modalExpose';
import $modalPage from '@/recoil/atoms/modalPage';
import $participantInfos from '@/recoil/atoms/participantInfos';
import $secondPageInfo from '@/recoil/atoms/secondPageInfo';
import $thirdPageInfo from '@/recoil/atoms/thirdPageInfo';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import {
	Button,
	CarouselIndicators,
	Modal,
	TextArea,
	Typography,
} from '@goorm-dev/gds-challenge';

const ModalFourthPage = () => {
	const defaultText = `ex. \n다음 번 챌린지에서는 더 어려운 문제가 출제되면 좋겠어요. \n오프라인 과제가 다양했으면 좋겠어요.`;
	const [textAreaValue, setTextAreaValue] = useState(defaultText);

	const handleFocus = () => {
		if (textAreaValue === defaultText) {
			setTextAreaValue('');
		}
	};

	const setModalPage = useSetRecoilState($modalPage);
	const setModalExpose = useSetRecoilState($modalExpose);

	const firstPageInfo = useRecoilValue($firstPageInfo);
	const secondPageInfo = useRecoilValue($secondPageInfo);
	const thirdPageInfo = useRecoilValue($thirdPageInfo);

	const { sessionValue: infos, setSessionValue: setInfos } =
		useLocalStorage($participantInfos);

	return (
		<div>
			<Modal centered isOpen>
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
					<Typography
						weight={700}
						style={{
							fontSize: '20px',
							lineHeight: '30px',
							letterSpacing: '-0.2px',
							color: '#2B2D36',
						}}
					>
						구름톤 챌린지에
						<br />
						전하고 싶은 말을 적어주세요.
					</Typography>
					<Typography
						style={{
							fontFamily: 'Pretendard, sans-serif',
							fontSize: '12px',
							fontWeight: 400,
							lineHeight: '18px',
							letterSpacing: '-0.1px',
							textAlign: 'left',
							color: '#858899',
						}}
					>
						더 좋은 챌린지가 될 수 있도록 데이터를 수집하려고 해요.
					</Typography>
					<TextArea
						block
						resize="vertical"
						rows={4}
						invalid={false}
						value={textAreaValue} // <-- TextArea의 value를 state로 설정
						onChange={(e) => {
							return setTextAreaValue(e.target.value);
						}} // <-- 내용이 변경되면 state 업데이트
						onFocus={handleFocus}
						style={{
							fontFamily: 'Pretendard, sans-serif',
							fontSize: '14px',
							fontWeight: 400,
							lineHeight: '22px',
							letterSpacing: '-0.1px',
							textAlign: 'left',
							color: '#858899',
							width: '420px',
							height: '104px',
							padding: '8px 16px',
							borderRadius: '8px',
							border: '1px solid #E1E1E8',
							gap: '16px',
						}}
					/>
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
						<CarouselIndicators length={4} activeIndex={3} />
						<div
							style={{
								display: 'flex',
								gap: '8px',
							}}
						>
							<Button
								color="link"
								onClick={() => {
									setModalPage(2);
								}}
							>
								이전
							</Button>
							<Button
								content="end"
								disabled={
									textAreaValue === defaultText ||
									textAreaValue.length <= 1
								}
								onClick={() => {
									setInfos([
										...infos,
										{
											firstPageInfo,
											secondPageInfo,
											thirdPageInfo,
											fourthPageInfo: {
												message: textAreaValue,
											},
										},
									]);
									setModalExpose(false);
								}}
							>
								제출하기
							</Button>
						</div>
					</div>
				</Modal.Footer>
			</Modal>
		</div>
	);
};
export default ModalFourthPage;
