import contacts from './reducers'
import {initialContacts} from './../constants/initial-contacts'

const chai = require('chai')
const expect = chai.expect

describe('Contacts reducer', () => {
  it('should handle initial state', () => {
    expect(contacts(initialContacts, {})).to.deep.equal([...initialContacts])
  })

  it('should handle ADD_CONTACT', () => {
    expect(
      contacts([], {
        type: 'ADD_CONTACT',
        name: 'Name Name',
        phoneNumber: '0697656565'
      })
    ).to.deep.equal([
      {
        id: 0,
        name: 'Name Name',
        phoneNumber: '0697656565'
      }
    ])

    expect(
      contacts([
        {
          id: 0,
          name: 'Name Name',
          phoneNumber: '0697656565'
        }
      ], {
        type: 'ADD_CONTACT',
        name: 'Name Name',
        phoneNumber: '0697656565'
      })
    ).to.deep.equal([
      {
        id: 0,
        name: 'Name Name',
        phoneNumber: '0697656565'
      },
      {
        id: 1,
        name: 'Name Name',
        phoneNumber: '0697656565'
      }
    ])
  })

  it('should handle EDIT_CONTACT_NAME', () => {
    expect(
      contacts([
        {
          id: 0,
          name: 'Name Name',
          phoneNumber: '0697656565'
        }
      ], {
        type: 'EDIT_CONTACT_NAME',
        id: 0,
        name: 'New Name'
      })
    ).to.deep.equal([
      {
        id: 0,
        name: 'New Name',
        phoneNumber: '0697656565'
      }
    ])
  })

  it('should handle EDIT_CONTACT_NUMBER', () => {
    expect(
      contacts([
        {
          id: 0,
          name: 'Name Name',
          phoneNumber: '0697656565'
        }
      ], {
        type: 'EDIT_CONTACT_NUMBER',
        id: 0,
        phoneNumber: '0606060606'
      })
    ).to.deep.equal([
      {
        id: 0,
        name: 'Name Name',
        phoneNumber: '0606060606'
      }
    ])
  })

  it('should handle DELETE_CONTACT', () => {
    expect(
      contacts([
        {
          id: 0,
          name: 'New Name',
          phoneNumber: '0697656565'
        }
      ], {
        type: 'DELETE_CONTACT',
        id: 0
      })
    ).to.deep.equal([])
  })
})
