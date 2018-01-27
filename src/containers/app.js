import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ContactActions from './../actions/actions'

import ContactItem from './../components/contact/contact-item'
import ContactView from './../components/contact/contact-view'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      selected: this.props.contacts[0].id || null
    }

    this.handleSelection = this.handleSelection.bind(this)
  }

  handleSelection (id) {
    this.setState({selected: this.props.contacts[id]})
  }

  render () {
    return (
      <div className='phonebook'>
        <div className='phonebook_list'>
          {this.props.contacts.map(contact =>
            <ContactItem key={contact.id}
              {...contact}
              isNew={false}
              isSelected={this.state.selected.id === contact.id}
              handleSelect={this.handleSelection}
            />
          )}
        </div>
        <ContactView
          addContact={this.props.actions.addContact}
          editName={this.props.actions.editContactName}
          editPhone={this.props.actions.editContactPhoneNumber}
          deleteContact={this.props.actions.deleteContact}
          contact={this.state.selected}
        />
      </div>
    )
  }
}

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
