import { locations } from '../locations';

function delay(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getLocations() {
	const randomError = Math.floor(Math.random() * 10 + 1);
	if (randomError === 1) {
		return { error: 'There was a network error' };
	}
	const requestDelay = Math.floor(Math.random() * 5000 + 2000);
	await delay(requestDelay);
	return { status: 200, data: locations };
}

export const promise = new Promise((resolve, reject) => {
	getLocations().then((response) => {
		if (response.status === 200) {
			return resolve(response);
		} else {
			return reject('error');
		}
	});
});
