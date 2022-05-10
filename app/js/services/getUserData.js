export default async function getUserData(url) {
	const response = await fetch(url);
	const data = await response.json();

	if (response.status === 200) {
		return data;
	} else {
		return `Error ${response.status}`
	}
}
