/**
 * Valid word starting characters
 * @type {[string,string,string,string]}
 */
const CONTAINERS = ['(', '[', '{'];

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
		.map((word) => {
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
	return word
		.split('')
		.map((letter, index, array) => {
			return index === 0 || CONTAINERS.includes(array[index - 1]) ? letter.toUpperCase() : letter;
		})
		.join('');
};



module.exports = titleCase;
