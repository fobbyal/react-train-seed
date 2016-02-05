/* eslint-env mocha */
import ajax, { setConfig } from '../../src/util/ajax';
import chai, { expect, should } from 'chai';
import chaiAsPromised from 'chai-as-promised';
chai.use(chaiAsPromised);
should();

setConfig({
  adapter: (resolve) => {
    resolve({ item: 'hello' });
  }
});

describe('ajax test', () => {
  it('should retrieve 1 item ', () => {
    return expect(ajax().get('/api')).to.eventually.deep.equal({ item: 'hello' });
  });
});
