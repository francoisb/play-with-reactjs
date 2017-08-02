import React from 'react';
import { Control, Form, actions } from 'react-redux-form';

class MeForm extends React.Component {
    handleSubmit = me => {
        console.log(me)
    }

    render() {
        return (
            <Form model="me" onSubmit={(me) => this.handleSubmit(me)}>
                <p>
                    <label htmlFor="me.firstName">What is your firstname ?</label>
                    <Control.text model="me.firstname" placeholder="your firstname" id="me.firstName" />
                </p>
                <p>
                    <label htmlFor="me.lastname">What is your lastname ?</label>
                    <Control.text model="me.lastname" placeholder="your lastname" id="me.lastname" />
                </p>
                <p>
                    <label htmlFor="me.email">What is your email ?</label>
                    <Control.text model="me.email" placeholder="your email" id="me.email" />
                </p>
                <menu>
                    <button type="submit">Ok</button>
                </menu>
            </Form>
        )
    }
}

export default MeForm;
