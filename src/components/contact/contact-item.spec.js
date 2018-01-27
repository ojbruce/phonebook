import React from 'react'
import { createRenderer } from 'react-test-renderer/shallow';
import ContactItem from './contact-item'

const chai = require('chai')
chai.should()

const setup = (assigned) => {
  const props = Object.assign({
    id: 0,
    name: 'Chou', 
    phoneNumber: '0609090909',
    isNew: false
  }, assigned)
  console.log(props);
  
  const renderer = createRenderer()

  renderer.render(
    <ContactItem {...props} />
  )

  let output = renderer.getRenderOutput()

  return {
    props: props,
    output: output,
    renderer: renderer
  }
}

describe('components', () => {
  describe('Contact Item', () => {
    it('Should render correctly', () => {
      const { output } = setup()

      output.type.should.equal('div')
      output.props.className.should.equal('phonebook__contact')
    })

    it('Should render correctly when isNew=True', () => {
      const { output } = setup({isNew: true})
      output.props.className.should.contain('phonebook__contact--new-contact')
    })
    
  })
})