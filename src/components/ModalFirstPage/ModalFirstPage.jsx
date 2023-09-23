import { useState } from 'react';

import {
	Button,
	CarouselIndicators,
	Input,
	Label,
	Modal,
	Typography,
} from '@goorm-dev/gds-challenge';

const ModalFirstPage = () => {
	const [firstInfo, setFirstInfo] = useState({
		name: '',
		phoneNo: '',
		email: '',
		personalInfoProcessPolicy: true,
		personalInfoCollectAgree: true,
		emailAgree: true,
		smsAgree: true,
	});

	return (
		<Modal isOpen toggle>
			<Modal.Header toggle />
			<Modal.Body>
				<Typography token="h4">참여자 정보를 입력해주세요.</Typography>
				<Typography token="subtitle-1">
					오프라인 팀 챌린지 참여자의 정보를 수집하려고 해요.
				</Typography>
				<Label required>이름</Label>
				<Input
					onChange={(next) => {
						setFirstInfo({
							...firstInfo,
							name: next,
						});
					}}
				/>
				<Label required>전화번호</Label>
				<Input
					onChange={(next) => {
						setFirstInfo({
							...firstInfo,
							phoneNo: next,
						});
					}}
				/>
				<Label required>이메일</Label>
				<Input
					onChange={(next) => {
						setFirstInfo({
							...firstInfo,
							email: next,
						});
					}}
				/>
				<Input
					type="checkbox"
					checked={
						firstInfo.personalInfoProcessPolicy &&
						firstInfo.personalInfoCollectAgree &&
						firstInfo.emailAgree &&
						firstInfo.smsAgree
					}
				/>{' '}
				전체 동의
				<Input
					type="checkbox"
					checked={firstInfo.personalInfoProcessPolicy}
					onClick={() => {
						setFirstInfo({
							...firstInfo,
							personalInfoProcessPolicy:
								!firstInfo.personalInfoProcessPolicy,
						});
					}}
				/>{' '}
				(필수) 개인정보처리방침
				<Input
					type="checkbox"
					checked={firstInfo.personalInfoCollectAgree}
					onClick={() => {
						setFirstInfo({
							...firstInfo,
							personalInfoCollectAgree:
								!firstInfo.personalInfoCollectAgree,
						});
					}}
				/>
				(선택) 마케팅 목적의 개인 정보 수집 및 이용
				<Input
					type="checkbox"
					checked={firstInfo.emailAgree && firstInfo.smsAgree}
				/>
				(선택) 광고성 정보 수신
				<Input
					type="checkbox"
					checked={firstInfo.emailAgree}
					onClick={() => {
						setFirstInfo({
							...firstInfo,
							emailAgree: !firstInfo.emailAgree,
						});
					}}
				/>
				이메일
				<Input
					type="checkbox"
					checked={firstInfo.smsAgree}
					onClick={() => {
						setFirstInfo({
							...firstInfo,
							smsAgree: !firstInfo.smsAgree,
						});
					}}
				/>
				SMS
				<Typography color="primary">
					* 광고성 정보 수신에 동의하시면
				</Typography>
			</Modal.Body>
			<Modal.Footer>
				<CarouselIndicators length={4} onClickWithIndex={alert} />
				{firstInfo.personalInfoProcessPolicy && <Button>다음</Button>}
			</Modal.Footer>
		</Modal>
	);
};

export default ModalFirstPage;
