const capitalize = (s: string): string =>
	s.replace(/(\b[a-z](?!s))/g, (x) => x.toUpperCase());

export default capitalize;
