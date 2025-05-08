export const fetcher = (): Promise<{ name: string }> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				name: "zenos",
			});
		}, 1000);
	});
};
