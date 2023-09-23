import { useState } from 'react';

import $firstPageInfo from '@/recoil/atoms/firstPageInfo';
import $modalExpose from '@/recoil/atoms/modalExpose';
import $modalPage from '@/recoil/atoms/modalPage';
import { useSetRecoilState } from 'recoil';

import {
	Button,
	CarouselIndicators,
	Input,
	Label,
	Modal,
	Typography,
} from '@goorm-dev/gds-challenge';

const ModalFirstPage = () => {
	const [info, setinfo] = useState({
		name: '',
		phoneNo: '',
		email: '',
		personalInfoProcessPolicy: true,
		personalInfoCollectAgree: true,
		emailAgree: true,
		smsAgree: true,
	});

	const setModalPage = useSetRecoilState($modalPage);
	const setModalExpose = useSetRecoilState($modalExpose);

	const setFirstPageInfo = useSetRecoilState($firstPageInfo);

	return (
		<Modal isOpen toggle>
			<Modal.Header
				toggle={() => {
					setModalExpose(false);
				}}
			/>
			<Modal.Body>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '8px',
					}}
				>
					<Typography token="h4">
						참여자 정보를 입력해주세요.
					</Typography>
					<Typography token="subtitle-1">
						오프라인 팀 챌린지 참여자의 정보를 수집하려고 해요.
					</Typography>
				</div>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '16px',
						width: '100%',
					}}
				>
					<div>
						<Label required>이름</Label>
						<Input
							style={{ width: '100%' }}
							onChange={(e) => {
								setinfo({
									...info,
									name: e.target.value,
								});
							}}
						/>
					</div>
					<div>
						<Label required>전화번호</Label>
						<Input
							style={{ width: '100%' }}
							onChange={(e) => {
								setinfo({
									...info,
									phoneNo: e.target.value,
								});
							}}
						/>
					</div>
					<div>
						<Label required>이메일</Label>
						<Input
							style={{ width: '100%' }}
							onChange={(e) => {
								setinfo({
									...info,
									email: e.target.value,
								});
							}}
						/>
					</div>
				</div>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '8px',
					}}
				>
					<Input
						type="checkbox"
						checked={
							info.personalInfoProcessPolicy &&
							info.personalInfoCollectAgree &&
							info.emailAgree &&
							info.smsAgree
						}
						onClick={() => {
							if (
								info.personalInfoProcessPolicy &&
								info.personalInfoCollectAgree &&
								info.emailAgree &&
								info.smsAgree
							) {
								setinfo({
									personalInfoProcessPolicy: false,
									personalInfoCollectAgree: false,
									emailAgree: false,
									smsAgree: false,
								});
							} else {
								setinfo({
									personalInfoProcessPolicy: true,
									personalInfoCollectAgree: true,
									emailAgree: true,
									smsAgree: true,
								});
							}
						}}
						label="전체 동의"
					/>{' '}
					<hr
						style={{
							width: '100%',
						}}
					/>
					<Input
						type="checkbox"
						checked={info.personalInfoProcessPolicy}
						onClick={() => {
							setinfo({
								...info,
								personalInfoProcessPolicy:
									!info.personalInfoProcessPolicy,
							});
						}}
						label="(필수) 개인정보처리방침"
					/>{' '}
					<Input
						type="checkbox"
						checked={info.personalInfoCollectAgree}
						onClick={() => {
							setinfo({
								...info,
								personalInfoCollectAgree:
									!info.personalInfoCollectAgree,
							});
						}}
						label="(선택) 마케팅 목적의 개인 정보 수집 및 이용"
					/>
					<Input
						type="checkbox"
						checked={info.emailAgree && info.smsAgree}
						onClick={() => {
							if (info.emailAgree && info.smsAgree) {
								setinfo({
									...info,
									emailAgree: false,
									smsAgree: false,
								});
							} else {
								setinfo({
									...info,
									emailAgree: true,
									smsAgree: true,
								});
							}
						}}
						label="(선택) 광고성 정보 수신"
					/>
					<div
						style={{
							display: 'flex',
							marginLeft: '32px',
							flexDirection: 'row',
							gap: '8px',
						}}
					>
						<Input
							type="checkbox"
							checked={info.emailAgree}
							onClick={() => {
								setinfo({
									...info,
									emailAgree: !info.emailAgree,
								});
							}}
							label="이메일"
						/>
						<Input
							type="checkbox"
							checked={info.smsAgree}
							onClick={() => {
								setinfo({
									...info,
									smsAgree: !info.smsAgree,
								});
							}}
							label="SMS"
						/>
					</div>
					<Typography color="primary">
						※ 광고성 정보 수신에 동의하시면 챌린지에 꾸준히 참여하실
						수 있도록 리마인드 알림을 보내드려요.
					</Typography>
				</div>
			</Modal.Body>
			<Modal.Footer>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						width: '100%',
					}}
				>
					<CarouselIndicators
						length={4}
						activeIndex={0}
						onClickWithIndex={setModalPage}
					/>
					<Button
						disabled={!info.personalInfoProcessPolicy}
						onClick={() => {
							// 데이터 저장하고 다음 페이지 넘어가기
							setFirstPageInfo(info);
							setModalPage(1);
						}}
					>
						다음
					</Button>
				</div>
			</Modal.Footer>
		</Modal>
	);
};

export default ModalFirstPage;
