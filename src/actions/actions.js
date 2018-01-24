import * as types from '../constants/action-types'

export const addContact = (name, phoneNumber) => ({
  type: types.ADD_CONTACT,
  name,
  phoneNumber
})
export const deleteContact = (id) => ({
  type: types.DELETE_CONTACT,
  id
})
export const editContactName = (id, name) => ({
  type: types.EDIT_CONTACT_NAME,
  id,
  name
})
export const editContactPhoneNumber = (id, phoneNumber) => ({
  type: types.EDIT_CONTACT_NUMBER,
  id,
  phoneNumber
})
