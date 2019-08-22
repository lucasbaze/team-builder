import React from 'react';
import { Card, Button } from 'semantic-ui-react';
import styled from 'styled-components';

const TeamCard = ({ teamMember, selectMemberToEdit }) => {
    return (
        <Card>
            <Card.Content>
                <Card.Header as="h3">{teamMember.first_name}</Card.Header>
                <Card.Meta>{teamMember.last_name}</Card.Meta>
                <Card.Description>{teamMember.email}</Card.Description>
            </Card.Content>
            <Button onClick={() => selectMemberToEdit(teamMember.id)}>
                Edit
            </Button>
        </Card>
    );
};

export default TeamCard;
