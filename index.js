/**
 * Title Case a String whilst Excluding Certain Words
 * @param  {string} title String to be "title cased"
 * @param  {array} exclusions Array of strings to be excluded from title casing [optional]
 * @return {string} Title-cased string
 */
const titleCase = (title, exclusions = []) => {
	return title
		.trim()
		.toLowerCase()
		.split(' ')
		.map(function filterWords(word) {
			if (exclusions.includes(word))
				return word;
			else
				return capitaliseFirstChar(word);
		})
		.join(' ');
};

/**
 * Capitalise the first character in a string
 * @param word
 * @returns {string}
 */
const capitaliseFirstChar = (word) => {
	return word.split('').map(function(w,i) {
		return i == 0 ? w.toUpperCase() : w;
	}).join('');
};

module.exports = titleCase;
