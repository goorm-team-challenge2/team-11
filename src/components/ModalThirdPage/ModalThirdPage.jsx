import {
	Button,
	CarouselIndicators,
	Modal,
	Typography,
} from '@goorm-dev/gds-challenge';

const ModalThirdPage = () => {
	return (
		<div>
			<Modal isOpen>
				<Modal.Header
					toggle
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
						>
							1.{' '}
						</Button>
						<Button
							color="link"
							style={{
								display: 'flex',
								alignItems: 'start',
								width: '100%',
							}}
						>
							2.{' '}
						</Button>
						<Button
							color="link"
							style={{
								display: 'flex',
								alignItems: 'start',
								width: '100%',
							}}
						>
							3.{' '}
						</Button>
						<Button
							color="link"
							style={{
								display: 'flex',
								alignItems: 'start',
								width: '100%',
							}}
						>
							4.{' '}
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
							<Button color="link">이전</Button>
							<Button content="end" disabled>
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
