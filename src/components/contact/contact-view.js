import React from 'react'
import PropTypes from 'prop-types'

require('./contact-view.scss')

let classNames = require('classnames')

const ContactView = ({ contact, addContact, editPhone, editName, deleteContact }) => {
  const cNames = classNames(
    {
      'phonebook__contact-view': true,
      'empty__view': !contact
    }
  )

  if (!contact) {
    return (
      <div className={cNames}>
        <span> No contact selected </span>
      </div>
    )
  }

  return (
    <div className={cNames}>
      <div className='contact__icon'>
        1
      </div>
      <div className='contact__info'>
        <div className='contact__name'>
          Name :
          <input
            value={contact.name}
            onChange={(e) => editName(contact.id, e.target.value)}
          />
        </div>
        <div className='contact__phone-number'>
          Numéro :
          <input
            value={contact.phoneNumber}
            onChange={(e) => editPhone(contact.id, e.target.value)}
          />
        </div>
      </div>
      <div className='action__row'>
        <button
          className='delete__button'
          onClick={(e) => deleteContact(contact.id)}>
          <i className='fa fa-trash-o' aria-hidden /> Delete
        </button>
      </div>
    </div>
  )
}

ContactView.propTypes = {
  contact: PropTypes.object,
  addContact: PropTypes.func.isRequired,
  editPhone: PropTypes.func.isRequired,
  editName: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired
}

export default ContactView
