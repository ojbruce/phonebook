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
    this.handleAdd = this.handleAdd.bind(this)
  }

  componentWillReceiveProps ({contacts}) {
    if (contacts.length !== this.props.contacts.length) {
      this.setState({selected: contacts[contacts.length - 1]})
    }
  }

  handleSelection (id) {
    this.setState({selected: this.props.contacts[id]})
  }

  handleAdd () {
    this.props.actions.addContact('Nouveau', '00000')
  }

  render () {
    return (
      <div className='phonebook'>
        <div className='phonebook_list'>
          {this.props.contacts.map(contact =>
            <ContactItem key={contact.id}
              {...contact}
              isNew={false}
              isSelected={this.state.selected
                ? this.state.selected.id === contact.id
                : false
              }
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
        <button
          className='add-contact'
          onClick={this.handleAdd}
        >
          <i className='fa fa-plus' aria-hidden='true' />
        </button>
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
