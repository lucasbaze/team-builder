import React from 'react';
import { Card, Header } from 'semantic-ui-react';
import styled from 'styled-components';

const TeamCard = ({ teamMember }) => {
    return (
        <Card>
            <Card.Content>
                <Card.Header as="h3">{teamMember.first_name}</Card.Header>
                <Card.Meta>{teamMember.last_name}</Card.Meta>
                <Card.Description>{teamMember.email}</Card.Description>
            </Card.Content>
        </Card>
    );
};

export default TeamCard;
