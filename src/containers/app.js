import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ContactItem from './../components/contact/contact-item'

const App = ({contacts}) => (
  <div className='phonebook'>
    {contacts.map(contact =>
      <ContactItem key={contact.id}
        name={contact.name}
        phoneNumber={contact.phoneNumber}
        isNew={false}
      />
    )}
  </div>
)

App.propTypes = {
  contacts: PropTypes.array.isRequired
}

const mapStateToProps = (state) =>
  ({contacts: state})

const populatedApp = connect(
  mapStateToProps
)(App)

export default populatedApp
