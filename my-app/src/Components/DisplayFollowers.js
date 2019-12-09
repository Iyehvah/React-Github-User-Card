import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    text-align: center;
    border: 3px solid green;
    width: 500px;
    margin: 0 auto;
    padding-bottom: 20px;
    background-color: black
`;

const Title = styled.h1`
    font-size: 3rem;
    color: green;
`;

const P = styled.p`
    color: white;
`;

const H1 = styled.h1`
    color: white;
`;

const H2 = styled.h2`
    color: white;
`;

const DisplayFollowers = (props) => {
    return (
        <div>
            <Div>
                <H1>My Profile</H1>
                <H2>Username: {props.user.login}</H2>
                <P>Name: {props.user.name}</P>
                <img src={props.user.avatar_url} />
            </Div>
            
            
            <Title>Followers</Title>
            {props.users.map(users => 
                <Div>
                    <H2>{users.login}</H2>
                    <img src={users.avatar_url} />
                </Div>
            )}
        </div>
    )
}

export default DisplayFollowers;