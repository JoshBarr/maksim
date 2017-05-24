const lib = require('./index');

describe('drink', () => {
  it('returns beer', () => {
    expect(lib.drink()).toBe('beer');
  });
});
