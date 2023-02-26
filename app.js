// npm --version

// Local Dependency
// npm install <packagename>

// Global Dependency
// npm install -g <packagename>
// sudo npm install -g <packagename>

const _ = require('lodash');

const items = [1, [2, [3, [4]]]];

const newItems = _.flattenDeep(items);

console.log(newItems);
