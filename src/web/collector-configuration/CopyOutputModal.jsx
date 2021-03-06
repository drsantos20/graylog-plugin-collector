import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'react-bootstrap';

import { BootstrapModalForm, Input } from 'components/bootstrap';

const CopyOutputModal = React.createClass({
    propTypes: {
        id: PropTypes.string,
        copyOutput: PropTypes.func.isRequired,
        validOutputName: PropTypes.func.isRequired,
    },

    getDefaultProps() {
        return {
            id: '',
            name: '',
        };
    },

    getInitialState() {
        return {
            id: this.props.id,
            name: '',
            error: false,
            error_message: '',
        };
    },

    openModal() {
        this.refs.modal.open();
    },

    _getId(prefixIdName) {
        return prefixIdName + this.state.name;
    },

    _closeModal() {
        this.refs.modal.close();
    },

    _saved() {
        this._closeModal();
        this.setState({ name: '' });
    },

    _save() {
        const configuration = this.state;

        if (!configuration.error) {
            this.props.copyOutput(this.props.id, this.state.name, this._saved);
        }
    },

    _changeName(event) {
        this.setState({ name: event.target.value });
    },

    render() {
        return (
            <span>
                <Button onClick={this.openModal}
                        bsStyle="warning"
                        bsSize="xsmall">
                  Clone
                </Button>
                <BootstrapModalForm ref="modal"
                                    title="Clone"
                                    onSubmitForm={this._save}
                                    submitButtonText="Create">
                  <fieldset>
                    <Input type="text"
                           id={this._getId('output-name')}
                           label="Name"
                           defaultValue={this.state.name}
                           onChange={this._changeName}
                           bsStyle={this.state.error ? 'error' : null}
                           help={this.state.error ? this.state.error_message : 'Type a name for the new output'}
                           autoFocus
                           required />
                  </fieldset>
                </BootstrapModalForm>
            </span>
        );
    },
});

export default CopyOutputModal;