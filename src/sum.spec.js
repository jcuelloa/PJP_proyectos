//const sum = require('./sum');   //formato EM5

import sum from './sum';   //formato EM6


test('adds 1 + 2 to equal 3',() => {
    expect(sum(1,2)).toBe(3);
});
