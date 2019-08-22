import React, { useState, useEffect } from 'react';
import './App.css';

import { Header, Card } from 'semantic-ui-react';
import TeamCard from './components/TeamCard.js';
import TeamForm from './components/Form.js';

const App = () => {
    const [teamData, setTeamData] = useState([]);
    const [currentMember, setCurrentMember] = useState({
        id: 0,
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
                console.log(data);
                setTeamData(data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const handleChange = event => {
        console.log(currentMember);
        setCurrentMember({
            ...currentMember,
            [event.target.name]: event.target.value,
        });
    };

    const clearForm = () => {
        setCurrentMember({
            first_name: '',
            last_name: '',
            email: '',
        });
    };

    const handleSubmit = () => {
        if (currentMember.id === 0) {
            setTeamData([currentMember, ...teamData]);
        }
        if (currentMember.id !== 0) {
            let index = teamData.findIndex(member => {
                return member.id === currentMember.id;
            });

            teamData[index] = currentMember;

            setTeamData([...teamData]);
        }

        setCurrentMember({
            id: 0,
            first_name: '',
            last_name: '',
            email: '',
        });
    };

    const selectMemberToEdit = memberID => {
        let [editMember] = teamData.filter(member => member.id === memberID);
        setCurrentMember(editMember);
    };

    return (
        <div className="App">
            <Header as="h1">My Super Team</Header>
            <div style={{ width: 500 }}>
                <TeamForm
                    currentMember={currentMember}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    clearForm={clearForm}
                />
            </div>
            <div style={{ marginTop: 100 }}>
                <Card.Group centered>
                    {teamData.map(teamMember => {
                        return (
                            <TeamCard
                                teamMember={teamMember}
                                selectMemberToEdit={selectMemberToEdit}
                            />
                        );
                    })}
                </Card.Group>
            </div>
        </div>
    );
};

export default App;
