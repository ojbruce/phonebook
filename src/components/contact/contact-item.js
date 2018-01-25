import React from 'react'
import PropTypes from 'prop-types'

require('./contact-item.scss')

let classNames = require('classnames')

const ContactItem = ({ name, phoneNumber, isNew }) => {
  const cNames = classNames(
    {
      'phonebook__contact': true,
      'phonebook__contact--new-contact': isNew
    }
  )

  return (
    <div className={cNames}>
      <div className='contact__icon'>
        {name[0]}
      </div>
      <div className='contact__info'>
        <div className='contact__name'>
          {name}
        </div>
        <div className='contact__phone-number'>
          {phoneNumber}
        </div>
      </div>
      
    </div>
  )
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  isNew: PropTypes.bool.isRequired
}

export default ContactItem
