import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const App = ({contacts}) => (
  <div className=''>
    {contacts.map(contact =>
      <span key={contact.id}>{contact.name}</span>
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
