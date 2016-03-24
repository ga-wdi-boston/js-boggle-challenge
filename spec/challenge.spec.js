'use strict';

const boggleVariants = require('../lib/challenge.js');

describe('challenge', () => {

  describe('Boggle', () => {
    const boggle = boggleVariants.boggle;
    const tray = 'dibtloambcgrumps'.split('');

    let dogs = [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3],
    ];

    it(`returns 'dogs' for ${dogs.join(';')}`, () => {
      expect(boggle(tray, dogs)).toBe('dogs');
    });

    let cat = [
      [2, 1],
      [1, 2],
      [0, 3],
    ];

    it(`returns 'cat' for ${cat.join(';')}`, () => {
      expect(boggle(tray, cat)).toBe('cat');
    });

    let loam = [
      [1, 0],
      [1, 1],
      [1, 2],
      [1, 3],
    ];

    it(`returns 'loam' for ${loam.join(';')}`, () => {
      expect(boggle(tray, loam)).toBe('loam');
    });

  });

  describe('Big Boggle', () => {
    const boggle = boggleVariants.bigBoggle;
    const tray = 'ndehywdibtfloamvbcgrjumps'.split('');

    let dogs = [
      [1, 1],
      [2, 2],
      [3, 3],
      [4, 4],
    ];

    it(`returns 'dogs' for ${dogs.join(';')}`, () => {
      expect(boggle(tray, dogs)).toBe('dogs');
    });

    let cat = [
      [3, 2],
      [2, 3],
      [1, 4],
    ];

    it(`returns 'cat' for ${cat.join(';')}`, () => {
      expect(boggle(tray, cat)).toBe('cat');
    });

    let loam = [
      [2, 1],
      [2, 2],
      [2, 3],
      [2, 4],
    ];

    it(`returns 'loam' for ${loam.join(';')}`, () => {
      expect(boggle(tray, loam)).toBe('loam');
    });

  });

  describe('Super Big Boggle', () => {
    const boggle = boggleVariants.superBigBoggle;
    const tray = 'ndehykwdibtefloamsvbcgrijumpslpearnt'.split('');

    let dogs = [
      [1, 1],
      [2, 2],
      [3, 3],
      [4, 4],
    ];

    it(`returns 'dogs' for ${dogs.join(';')}`, () => {
      expect(boggle(tray, dogs)).toBe('dogs');
    });

    let cat = [
      [3, 2],
      [2, 3],
      [1, 4],
    ];

    it(`returns 'cat' for ${cat.join(';')}`, () => {
      expect(boggle(tray, cat)).toBe('cat');
    });

    let loam = [
      [2, 1],
      [2, 2],
      [2, 3],
      [2, 4],
    ];

    it(`returns 'loam' for ${loam.join(';')}`, () => {
      expect(boggle(tray, loam)).toBe('loam');
    });

  });

});
