// @flow weak
/* eslint-env mocha */

import React from 'react'
import { assert } from 'chai'
import { shallow } from 'enzyme'
import { linear } from '../Slider/scales'
import Ticks from './Ticks'

const noop = () => {}

describe('<Ticks />', () => {
  it('renders the result of child function', () => {
    const wrapper = shallow(
      <Ticks scale={linear()} handles={[]} emitMouse={noop} emitTouch={noop}>
        {() => {
          return <div className="wu-tang" />
        }}
      </Ticks>,
    )

    assert.strictEqual(wrapper.contains(<div className="wu-tang" />), true)
  })
})
