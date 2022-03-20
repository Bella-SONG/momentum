const quotes = [
	{
		quote:
			"Music is the language of the spirit. It opens the secret of life bringing peace, abolishing strife.",
		author: "Kahlil Gibran",
	},
	{
		quote:
			"Music is the only language in which you cannot say a mean or sarcastic thing.",
		author: "ohn Erskine",
	},
	{
		quote: "Music is the moonlight in the gloomy night of life.",
		author: "John Paul Friedrich Richter",
	},
	{
		quote:
			"If Music is a Place — then Jazz is the City, Folk is the Wilderness, Rock is the Road, Classical is a Temple.",
		author: "Vera Nazarin",
	},
	{
		quote: "Love is friendship set to music.",
		author: "Henry Wadsworth Longfellow",
	},
	{
		quote:
			"Music is the literature of the heart; it commences where speech ends.",
		author: "Alphonse de Lamartine",
	},
	{
		quote: "Music is the art which is most nigh to tears and memory.",
		author: "Oscar Wilde",
	},
	{
		quote:
			"Music is nothing else but wild sounds civilized into time and tune.",
		author: "Thomas Fuller",
	},
	{
		quote:
			"Music is your own experience, your thoughts, your wisdom. If you don’t live it, it won’t come out of your horn.",
		author: "Charlie Parker",
	},
	{
		quote: "One good thing about music, when it hits you, you feel no pain.",
		author: "Bob Marley",
	},
	{
		quote:
			"Music produces a kind of pleasure which human nature cannot do without.",
		author: "Confucius",
	},
	{
		quote: "Where words fail, music speaks.",
		author: "Hans Christian Anderson",
	},
	{
		quote:
			"How is it that music can, without words, evoke our laughter, our fears, our highest aspirations?",
		author: "Jane Swan",
	},
	{
		quote:
			"Music expresses feeling and thought, without language; it was below and before speech, and it is above and beyond all words.",
		author: "Robert G. Ingersoll",
	},
	{
		quote: "Without music, life would be a blank to me.",
		author: "Jane Austen",
	},
	{ quote: "Philosophy is the highest music.", author: "Plato" },
	{
		quote:
			"Music is what tells us that the human race is greater than we realize.",
		author: "Napoleon Bonaparte",
	},
	{
		quote: "Some people have lives; some people have music.",
		author: "John Green",
	},
	{
		quote:
			"Music, once admitted to the soul, becomes a sort of spirit, and never dies.",
		author: "Edward Bulwar Lytton",
	},
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
