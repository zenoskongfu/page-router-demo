export function getData() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(Array(1000).fill(0));
		}, 1000);
	});
}
