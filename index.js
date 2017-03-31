/**
 * Title Case a String whilst Excluding Certain Words
 * @param  {string} title      String to be "title cased"
 * @param  {array} exclusions  Array of strings to be excluded from title casing [optional]
 * @return {string}            Title-cased string
 */
const titleCase = (title, exclusions = []) => {
    return title
        .toLowerCase()
        .split(' ')
        .map(function(str, i) {
            if (exclusions.indexOf(str) === -1)
                return capitalizeFirstChar(str);
            else
                return str;
        })
        .join(' ');
}

const capitalizeFirstChar = word => {
    return word.split('').map(function(w,i) {
        return i == 0 ? w.toUpperCase() : w;
    }).join('');
}

exports.titleCase = titleCase;
