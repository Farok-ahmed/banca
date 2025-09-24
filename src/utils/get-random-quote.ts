export function getRandomQuote(): string {
	const quotes = [
		"We design Banca for the readers, optimizing not for page views or engagement",
		"Banca turns out that context is a key part of learning.",
		"You can create any type of product documentation with Banca",
		"Advanced visual search system powered by Ajax",
	];
	const randomIndex = Math.floor(Math.random() * quotes.length);

	if (randomIndex < 0 || randomIndex >= quotes.length) return getRandomQuote();

	return quotes[randomIndex];
}

export const quote = getRandomQuote();
