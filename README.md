# StringTitleCase - JavaScript

Capitalises first character of each word in string except words from the exclusion array.

## Installation
`npm install string-title-case`

## Usage
Node.JS:
```javascript
const {titleCase} = require('string-title-case');

console.log( titleCase("hello TO The world", ['to','the']) ); // Hello to the World
console.log( titleCase("g'day mate") ); // G'day Mate
```

ES6:
```javascript
import {titleCase} from 'string-title-case';

console.log( titleCase("hello TO The world", ['to','the']) ); // Hello to the World
console.log( titleCase("g'day mate") ); // G'day Mate
```
