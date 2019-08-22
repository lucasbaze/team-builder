import React, { useState, useEffect } from 'react';
import { Form, Button } from 'semantic-ui-react';

const TeamForm = ({ currentMember, handleChange, handleSubmit, clearForm }) => {
    return (
        <Form size="large" onSubmit={member => handleSubmit(member)}>
            <Form.Group widths="equal">
                <Form.Input
                    fluid
                    name="first_name"
                    label="First Name"
                    placeholder="First Name"
                    value={currentMember.first_name}
                    onChange={e => handleChange(e)}
                />

                <Form.Input
                    fluid
                    name="last_name"
                    label="Last Name"
                    placeholder="Last Name"
                    value={currentMember.last_name}
                    onChange={e => handleChange(e)}
                />
            </Form.Group>
            <Form.Input
                fluid
                name="email"
                label="Email"
                placeholder="email"
                value={currentMember.email}
                onChange={e => handleChange(e)}
            />

            <Button type="submit">Submit</Button>
            {/*<Button onClick={() => clearForm()}>Clear Form</Button>*/}
        </Form>
    );
};

export default TeamForm;
