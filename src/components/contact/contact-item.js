import React from 'react'
import PropTypes from 'prop-types'

require('./contact-item.scss')

let classNames = require('classnames')

const ContactItem = ({ id, name, phoneNumber, isNew, isSelected, handleSelect }) => {
  const cNames = classNames(
    {
      'phonebook__contact': true,
      'phonebook__contact--selected': isSelected,
      'phonebook__contact--new-contact': isNew
    }
  )

  return (
    <div className={cNames} onClick={() => handleSelect(id)}>
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
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  isNew: PropTypes.bool.isRequired,
  isSelected: PropTypes.bool,
  handleSelect: PropTypes.func.isRequired
}

export default ContactItem
