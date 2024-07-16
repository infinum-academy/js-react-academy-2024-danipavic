export async function mutator(url: string, { arg }: { arg: any }, method = 'POST') {
	const response = await fetch(url, {
		method,
		body: JSON.stringify(arg),
		headers: {
			'Content-Type': 'application/json',
		},
	});

	if (!response.ok) {
		throw new Error(`Error mutating data on ${url}`);
	}

	return response;
}
