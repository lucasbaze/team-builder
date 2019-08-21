import React from 'react';
import { Form, Button } from 'semantic-ui-react';

const TeamForm = ({ newTeamData, handleChange, handleSubmit }) => {
    return (
        <Form size="large" onSubmit={() => handleSubmit()}>
            <Form.Group widths="equal">
                <Form.Input
                    fluid
                    name="first_name"
                    label="First Name"
                    placeholder="First Name"
                    value={newTeamData.first_name}
                    onChange={e => handleChange(e)}
                />

                <Form.Input
                    fluid
                    name="last_name"
                    label="Last Name"
                    placeholder="Last Name"
                    value={newTeamData.last_name}
                    onChange={e => handleChange(e)}
                />
            </Form.Group>
            <Form.Input
                fluid
                name="email"
                label="Email"
                placeholder="email"
                value={newTeamData.email}
                onChange={e => handleChange(e)}
            />
            <Button type="submit">Submit</Button>
        </Form>
    );
};

export default TeamForm;
