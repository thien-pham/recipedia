import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleInfoModal } from '../actions';

export class TopNav extends Component {
    toggleInfoModal(event) {
        event.preventDefault();
        this.props.dispatch(toggleInfoModal());
    }

    render() {
        return (
            <nav className="nav-bar" id="navb">
              <a className="what" href="#" onClick={e => this.toggleInfoModal(e)}>
                Write a Recipe
              </a>
            </nav>
        );
    }
};

export default connect()(TopNav);
