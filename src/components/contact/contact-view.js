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

  // unsplash random for now
  const url = 'https://source.unsplash.com/random/200x200/?q=' + contact.id

  return (
    <div className={cNames}>
      <div className='contact__preview'>
        <img src={url} with='100%' />
      </div>
      <div className='action__row'>
        <button
          className='delete__button'
          onClick={(e) => deleteContact(contact.id)}>
          <i className='fa fa-trash-o' aria-hidden />
        </button>
        <button>
          <i className='fa fa-commenting' aria-hidden='true"' />
        </button>
        <button>
          <i className='fa fa-address-card-o' aria-hidden='true"' />
        </button>
      </div>
      <div className='contact__info'>
        <div className='contact__name'>
          Name :
          <input
            value={contact.name}
            onChange={(e) => {console.log('test'); editName(contact.id, e.target.value)}}
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
