import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ContactActions from './../actions/actions'

import ContactItem from './../components/contact/contact-item'
import ContactView from './../components/contact/contact-view'

const App = ({contacts, actions}) => (
  <div className='phonebook'>
    <div className='phonebook_list'>
      {contacts.map(contact =>
        <ContactItem key={contact.id}
          name={contact.name}
          phoneNumber={contact.phoneNumber}
          isNew={false}
          addContact={actions.addContact}
          editName={actions.editContactName}
          editPhone={actions.editContactPhoneNumber}
          deleteContact={actions.deleteContact}
        />
      )}
    </div>
    <ContactView
      addContact={actions.addContact}
      editName={actions.editContactName}
      editPhone={actions.editContactPhoneNumber}
      deleteContact={actions.deleteContact}
      contact={contacts[0]}
    />
  </div>
)

App.propTypes = {
  contacts: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = (state) =>
  ({contacts: state})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ContactActions, dispatch)
})

const populatedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default populatedApp
