import { isTired, isHyper, isHungry, isEducated } from './moodsSelectors';

describe('selectors', () => {
  describe('mood selectors', () => {
    it('knows if it is tired', () => {
      expect(isTired({ coffees: 0, naps: 0 })).toBeTruthy();
    });

    it('knows if it is not tired', () => {
      expect(isTired({ coffees: 1, naps: 0 })).toBeFalsy();
    });

    it('knows if it is hyper', () => {
      expect(isHyper({ coffees: 4 })).toBeTruthy();
    });

    it('knows if it is not hyper', () => {
      expect(isHyper({ coffees: 3 })).toBeFalsy();
    });

    it('knows if it is educated', () => {
      expect(isEducated({ studies: 3 })).toBeTruthy();
    });

    it('knows if it is not educated', () => {
      expect(isEducated({ studies: 2 })).toBeFalsy();
    });

    it('knows if it is hungry', () => {
      expect(isHungry({ snacks: 0 })).toBeTruthy();
    });

    it('knows if it is not hungry', () => {
      expect(isHungry({ studies: 2 })).toBeFalsy();
    });
  });
});

