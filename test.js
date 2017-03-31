const {titleCase} = require('./index.js');

if (titleCase("hello To The world!", ['to','the']) !== "Hello to the World!")
    process.exit(1);

if (titleCase("g'day mate") !== "G'day Mate")
    process.exit(1);

process.exit(0);
