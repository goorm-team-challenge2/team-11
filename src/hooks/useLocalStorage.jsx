import { RecoilState, useRecoilCallback, useRecoilState } from 'recoil';

const { useState, useEffect } = require('react');

const useLocalStorage = (recoilState) => {
	const [sessionValue, setValue] = useRecoilState(recoilState);

	useEffect(() => {
		const item = window.localStorage.getItem(recoilState.key);
		if (item == null) {
			return;
		}
		try {
			setValue(JSON.parse(item));
		} catch (e) {
			console.warn(e);
		}
	}, []);

	const setSessionValue = useRecoilCallback(({ set }) => {
		return (newValue) => {
			try {
				window.localStorage.setItem(
					recoilState.key,
					JSON.stringify(newValue),
				);
				set(recoilState, newValue);
			} catch (e) {
				console.warn(e);
			}
		};
	});

	const resetSessionValue = useRecoilCallback(({ reset }) => {
		return () => {
			try {
				window.localStorage.removeItem(recoilState.key);
			} catch (e) {
				console.warn(e);
			}
		};
	});

	return { sessionValue, setSessionValue, resetSessionValue };
};

export default useLocalStorage;
