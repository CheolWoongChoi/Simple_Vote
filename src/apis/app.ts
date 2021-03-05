
export const fakeLogin = (id: string) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('login.....');
			
			resolve(id);
		}, 2000);
	});
}