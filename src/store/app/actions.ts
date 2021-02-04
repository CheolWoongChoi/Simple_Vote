
export const LOGIN = 'LOGIN' as const;

export const login = (id: string) => ({
	type: LOGIN,
	payload: id
});


