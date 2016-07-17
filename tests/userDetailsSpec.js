import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { UserDetails } from '../src/components/UserDetails.js';
import { assert } from 'chai';

function setup() {
  let props = {
    params: {id: 0},
    userList: [{
      name: 'Test', email: 'test@test.com'
    }]
  };

  let renderer = TestUtils.createRenderer()
  renderer.render(<UserDetails {...props}/>)
  let output = renderer.getRenderOutput()

  return {
    props,
    output,
    renderer
  }
}

describe('UserDetails', () => {
  it('should work', () => {
    const { output } = setup();
    assert.isOk(output);
  });


  it('should display name and email', () => {
    const { output } = setup();

    assert.equal(output.props.children[0].props.children[1], 'Test');
    assert.equal(output.props.children[1].props.children[1], 'test@test.com');
  });
});
