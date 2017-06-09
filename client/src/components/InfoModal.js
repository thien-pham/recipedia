import React from 'react';
import {connect} from 'react-redux';
import {toggleInfoModal} from '../actions';

// import './info-modal.css';

export class InfoModal extends React.Component {
    hide(event) {
        event.preventDefault();
        this.props.dispatch(toggleInfoModal());
    }

    render() {
        return (
            <div className="overlay-info" id="modal">
                <div className="content">
                    <h1 className="centered"><span className="red">Recipe</span>dia</h1>
                    <div className="information">
                        <p>Get inspired to dine at your favorite restaurants at home: </p>
                        <ul>
                            <li>1. Search for <strong>any restaurants</strong> in your area.</li>
                            <li>2. Browse the <strong>recipes</strong> inspired by those restaurants' dishes.</li>
                            <li>3. Or <strong>share</strong> your own!</li>
                        </ul>
                        <a className="close" href="#" onClick={e => this.hide(e)}>Go!</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(InfoModal);
