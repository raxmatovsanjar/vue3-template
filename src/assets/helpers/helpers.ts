// paste to clipboard
export async function paste(): Promise<string> {
	return await navigator.clipboard.readText().then(text => {
		return navigator?.clipboard ? text : '';
	});
}

// copy from clipboard
export async function copy(value: string): Promise<void> {
	await navigator?.clipboard?.writeText(value);
}

// change file to base64
export function fileToLink(data: File): string {
	return URL.createObjectURL(data);
}

// Return a number with spaces
export function numberWithSpaces(number: number): string {
	return number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}
