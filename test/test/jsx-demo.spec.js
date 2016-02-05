/* eslint-env mocha */
import React from 'react';
import chai, { expect } from 'chai';
import TestUtils from 'react-addons-test-utils';
import chaiJSX from 'chai-equal-jsx';
chai.use(chaiJSX);

const Comp = ({ active, txt }) => {
  if (active) {
    return <div className="act-class">{txt}</div>;
  }
  return <div >{txt}</div>;
};

describe('Testing jsx', () => {
  it('should be equals component', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<Comp active txt={'alex'} />);

    const output = renderer.getRenderOutput();
    expect(output.props.className).to.equal('act-class');
    expect(output.props.children).to.equal('alex');
  });
});
