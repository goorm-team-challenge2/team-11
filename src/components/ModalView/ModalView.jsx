import $modalExpose from '@/recoil/atoms/modalExpose';
import $modalPage from '@/recoil/atoms/modalPage';
import { useRecoilValue } from 'recoil';

import ModalFirstPage from '../ModalFirstPage/ModalFirstPage';
import ModalFourthPage from '../ModalFourthPage/ModalFourthPage';
import ModalSecondPage from '../ModalSecondPage/ModalSecondPage';
import ModalThirdPage from '../ModalThirdPage/ModalThirdPage';

const ModalView = () => {
	const modalPage = useRecoilValue($modalPage);

	const modalExpose = useRecoilValue($modalExpose);

	return (
		modalExpose === true &&
		(modalPage === 0 ? (
			<ModalFirstPage />
		) : modalPage === 1 ? (
			<ModalSecondPage />
		) : modalPage === 2 ? (
			<ModalThirdPage />
		) : (
			<ModalFourthPage />
		))
	);
};

export default ModalView;
