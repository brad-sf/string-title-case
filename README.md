# StringTitleCase - JavaScript

Capitalises first character of each word in string except words from the exclusion array.

## Installation
```javascript
npm install string-title-case
```

## Usage
```javascript
const titleCase = require('string-title-case');

const myString = 'This messAge IS the best!';
const myTitleCasedString = titleCase(myString, ['is', 'the']);

console.log(myTitleCasedString); // 'This Message is the Best!'
```
