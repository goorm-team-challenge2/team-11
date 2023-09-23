import { atom } from 'recoil';

const $participantsInfo = atom({
	key: 'ParticipantsInfo',
	default: [],
});

export default $participantsInfo;
