import { useState } from 'react';

import $modalExpose from '@/recoil/atoms/modalExpose';
import $modalPage from '@/recoil/atoms/modalPage';
import $secondPageInfo from '@/recoil/atoms/secondPageInfo';
import { useSetRecoilState } from 'recoil';

import {
	Button,
	CarouselIndicators,
	Input,
	Label,
	Modal,
	TextArea,
	Typography,
} from '@goorm-dev/gds-challenge';

const ModalSecondPage = () => {
	const setModalPage = useSetRecoilState($modalPage);
	const setModalExpose = useSetRecoilState($modalExpose);

	const [info, setInfo] = useState({
		softwareMajor: null,
		goormUse: null,
		usedServices: [],
		reason: '',
	});

	const setSecondPageInfo = useSetRecoilState($secondPageInfo);

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
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							gap: '32px',
						}}
					>
						<div
							style={{
								width: '100%',
								gap: '40px',
							}}
						>
							<Typography weight={700} color="dark" token="h4">
								구름 서비스 이용 경험을 알려주세요.
							</Typography>
							<Typography weight={700} color="hint">
								더 좋은 챌린지가 될 수 있도록 데이터를
								수집하려고 해요.
							</Typography>
						</div>
						<div
							style={{
								display: 'flex',
								gap: '32px',
								flexDirection: 'column',
							}}
						>
							<div
								style={{
									display: 'flex',
									flexDirection: 'column',
									gap: '16px',
								}}
							>
								<div style={{ display: 'flex', gap: '4px' }}>
									<Label required>
										<Typography>
											1. SW 관련 학과를 전공하셨나요?{' '}
										</Typography>
									</Label>
								</div>
								<div style={{ display: 'flex', gap: '16px' }}>
									<Button
										color="link"
										style={{
											display: 'flex',
											justifyContent: 'center',
											alignItems: 'center',
											width: '100%',
										}}
										active={info.softwareMajor === true}
										onClick={() => {
											setInfo({
												...info,
												softwareMajor: true,
											});
										}}
									>
										전공
									</Button>
									<Button
										color="link"
										style={{
											display: 'flex',
											justifyContent: 'center',
											alignItems: 'center',
											width: '100%',
										}}
										active={info.softwareMajor === false}
										onClick={() => {
											setInfo({
												...info,
												softwareMajor: false,
											});
										}}
									>
										비전공
									</Button>
								</div>
							</div>

							<div
								style={{
									display: 'flex',
									flexDirection: 'column',
									gap: '16px',
								}}
							>
								<div style={{ display: 'flex', gap: '4px' }}>
									<Label required>
										<Typography>
											2. 구름 서비스를 사용해 보신 적이
											있나요?{' '}
										</Typography>
									</Label>
								</div>
								<div style={{ display: 'flex', gap: '16px' }}>
									<Button
										color="link"
										style={{
											display: 'flex',
											justifyContent: 'center',
											alignItems: 'center',
											width: '100%',
										}}
										active={info.goormUse === true}
										onClick={() => {
											setInfo({
												...info,
												goormUse: true,
											});
										}}
									>
										예
									</Button>
									<Button
										color="link"
										style={{
											display: 'flex',
											justifyContent: 'center',
											alignItems: 'center',
											width: '100%',
										}}
										active={info.goormUse === false}
										onClick={() => {
											setInfo({
												...info,
												goormUse: false,
												usedServices: [],
												reason: '',
											});
										}}
									>
										아니요
									</Button>
								</div>
							</div>
							{info.goormUse === true && (
								<>
									<div
										style={{
											display: 'flex',
											flexDirection: 'column',
											gap: '16px',
										}}
									>
										<div
											style={{
												display: 'flex',
												gap: '4px',
											}}
										>
											<Typography>
												2-1. 사용 경험이 있는 서비스를
												선택해주세요. (복수 선택 가능){' '}
											</Typography>
										</div>
										<div
											style={{
												display: 'flex',
												gap: '16px',
												flexDirection: 'column',
											}}
										>
											<div
												style={{
													display: 'flex',
													flexDirection: 'row',
													width: '100%',
												}}
											>
												<div style={{ flex: '1' }}>
													<Input
														type="checkbox"
														label="구름EDU"
													/>
												</div>
												<div style={{ flex: '1' }}>
													<Input
														type="checkbox"
														label="구름LEVEL"
													/>
												</div>
												<div style={{ flex: '1' }}>
													<Input
														type="checkbox"
														label="구름DEVTH"
													/>
												</div>
											</div>
											<div
												style={{
													display: 'flex',
													flexDirection: 'row',
													width: '100%',
												}}
											>
												<div style={{ flex: '1' }}>
													<Input
														type="checkbox"
														label="구름IDE"
													/>
												</div>
												<div style={{ flex: '2' }}>
													<Input
														type="checkbox"
														label="구름EXP"
													/>
												</div>
											</div>
										</div>
									</div>
									<div
										style={{
											display: 'flex',
											flexDirection: 'column',
											gap: '16px',
										}}
									>
										<div
											style={{
												display: 'flex',
												gap: '4px',
											}}
										>
											<Typography>
												2-2. 해당 서비스를 사용하게 된
												이유는 무엇인가요?{' '}
											</Typography>
										</div>
										<TextArea
											rows={4}
											block
											invalid={false}
											resize="vertical"
											placeholder="ex. 구름톤 챌린지에 참여하기 위해 레벨 서비스를 사용해봤습니다."
											onChange={(e) => {
												setInfo({
													...info,
													reason: e.target.value,
												});
											}}
										/>
									</div>
								</>
							)}
						</div>
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
						<CarouselIndicators length={4} activeIndex={1} />
						<div
							style={{
								display: 'flex',
								flexDirection: 'row',
								gap: '8px',
							}}
						>
							<Button
								color="link"
								onClick={() => {
									setModalPage(0);
								}}
							>
								이전
							</Button>
							<Button
								content="end"
								disabled={
									info.softwareMajor === null ||
									info.goormUse === null ||
									(info.goormUse === true &&
										info.reason.length === 0)
								}
								onClick={() => {
									// 데이터 저장하고 다음 페이지 넘어가기
									setSecondPageInfo(info);
									setModalPage(2);
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

export default ModalSecondPage;
