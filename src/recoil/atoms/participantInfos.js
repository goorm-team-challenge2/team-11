import { atom } from 'recoil';

const $participantInfos = atom({
	key: 'ParticipantInfos',
	default: [],
});

export default $participantInfos;
