'use strict';

const boggleVariants = require('../lib/boggle.js');

describe('challenge', function() {

  describe('Boggle', function() {
    const boggle = boggleVariants.boggle;
    const tray = 'dibtloambcgrumps'.split('');

    let dogs = [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3],
    ];

    it(`returns 'dogs' for ${dogs.join(';')}`, function() {
      expect(boggle(tray, dogs)).toBe('dogs');
    });

    let cat = [
      [2, 1],
      [1, 2],
      [0, 3],
    ];

    it(`returns 'cat' for ${cat.join(';')}`, function() {
      expect(boggle(tray, cat)).toBe('cat');
    });

    let loam = [
      [1, 0],
      [1, 1],
      [1, 2],
      [1, 3],
    ];

    it(`returns 'loam' for ${loam.join(';')}`, function() {
      expect(boggle(tray, loam)).toBe('loam');
    });

  });

  describe('Big Boggle', function() {
    const boggle = boggleVariants.bigBoggle;
    const tray = 'ndehywdibtfloamvbcgrjumps'.split('');

    let dogs = [
      [1, 1],
      [2, 2],
      [3, 3],
      [4, 4],
    ];

    it(`returns 'dogs' for ${dogs.join(';')}`, function() {
      expect(boggle(tray, dogs)).toBe('dogs');
    });

    let cat = [
      [3, 2],
      [2, 3],
      [1, 4],
    ];

    it(`returns 'cat' for ${cat.join(';')}`, function() {
      expect(boggle(tray, cat)).toBe('cat');
    });

    let loam = [
      [2, 1],
      [2, 2],
      [2, 3],
      [2, 4],
    ];

    it(`returns 'loam' for ${loam.join(';')}`, function() {
      expect(boggle(tray, loam)).toBe('loam');
    });

  });

  describe('Super Big Boggle', function() {
    const boggle = boggleVariants.superBigBoggle;
    const tray = 'ndehykwdibtefloamsvbcgrijumpslpearnt'.split('');

    let dogs = [
      [1, 1],
      [2, 2],
      [3, 3],
      [4, 4],
    ];

    it(`returns 'dogs' for ${dogs.join(';')}`, function() {
      expect(boggle(tray, dogs)).toBe('dogs');
    });

    let cat = [
      [3, 2],
      [2, 3],
      [1, 4],
    ];

    it(`returns 'cat' for ${cat.join(';')}`, function() {
      expect(boggle(tray, cat)).toBe('cat');
    });

    let loam = [
      [2, 1],
      [2, 2],
      [2, 3],
      [2, 4],
    ];

    it(`returns 'loam' for ${loam.join(';')}`, function() {
      expect(boggle(tray, loam)).toBe('loam');
    });

  });

});
