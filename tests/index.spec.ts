import { expect } from 'chai';
import testMethod from '../src/index';

describe('base', () => {
  it('works', () => expect(testMethod("test")).to.be.true);
  it('works', () => expect(testMethod()).to.be.false);
});
