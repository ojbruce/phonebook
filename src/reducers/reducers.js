import { ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT_NAME, EDIT_CONTACT_NUMBER } from '../constants/action-types'
import {initialContacts} from './../constants/initial-contacts'

function contacts (state = initialContacts, action) {
  switch (action.type) {
    case ADD_CONTACT:
      return [
        ...state,
        {
          id: state.reduce((maxId, contact) => Math.max(contact.id, maxId), -1) + 1,
          name: action.name,
          phoneNumber: action.phoneNumber
        }
      ]
    case DELETE_CONTACT:
      return state.filter(contact => contact.id !== action.id)
    case EDIT_CONTACT_NAME:
      return state.map(
        contact =>
          contact.id === action.id
            ? { ...contact, name: action.name }
            : contact
      )
    case EDIT_CONTACT_NUMBER:
      return state.map(
        contact =>
          contact.id === action.id
            ? { ...contact, phoneNumber: action.phoneNumber }
            : contact
      )
    default:
      return state
  }
}

export default contacts
