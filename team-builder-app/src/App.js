import React, { useState, useEffect } from 'react';
import './App.css';

import { Header, Card } from 'semantic-ui-react';
import TeamCard from './components/TeamCard.js';
import TeamForm from './components/Form.js';

const App = () => {
    const [teamData, setTeamData] = useState([]);
    const [newTeamData, setNewTeamData] = useState({
        first_name: '',
        last_name: '',
        email: '',
    });

    useEffect(() => {
        console.log('sending fetch request');
        fetch(
            'https://my.api.mockaroo.com/users.json?key=ee167170&__method=OPTIONS'
        )
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch');
                }
                return response.json();
            })
            .then(data => {
                setTeamData(data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const handleChange = event => {
        console.log(newTeamData);
        setNewTeamData({
            ...newTeamData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = () => {
        console.log(teamData);
        setTeamData([newTeamData, ...teamData]);
        setNewTeamData({
            first_name: '',
            last_name: '',
            email: '',
        });
    };

    return (
        <div className="App">
            <Header as="h1">My Super Team</Header>
            <div style={{ width: 500 }}>
                <TeamForm
                    newTeamData={newTeamData}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                />
            </div>
            <div style={{ marginTop: 100 }}>
                <Card.Group centered>
                    {teamData.map(teamMember => {
                        return <TeamCard teamMember={teamMember} />;
                    })}
                </Card.Group>
            </div>
        </div>
    );
};

export default App;
