import React from 'react'
import { createRenderer } from 'react-test-renderer/shallow';
import ContactView from './contact-view'

const chai = require('chai')
chai.should()

const setup = (assigned) => {
  const props = {
    contact: {
      id: 0,
      name: 'Chou', 
      phoneNumber: '0609090909',
    },
    addContact: () => {},
    editPhone: () => {},
    editName: () => {},
    deleteContact: () => {}
  }
  Object.assign(props, assigned)

  const renderer = createRenderer()

  renderer.render(
    <ContactView {...props} />
  )

  let output = renderer.getRenderOutput()

  return {
    props: props,
    output: output,
    renderer: renderer
  }
}

describe('components', () => {
  describe('Contact View', () => {
    it('Should render correctly', () => {
      const { output } = setup()

      output.type.should.equal('div')
      output.props.className.should.equal('phonebook__contact-view')
    })
  })
})