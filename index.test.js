const lib = require('./index');

describe('drink', () => {
  it('returns beer', () => {
    expect(lib.drink()).toBe('beer');
  });
  it('unless you prefer vodka', () => {
    expect(lib.drink('be-by')).toBe('vodka');
  });
});
