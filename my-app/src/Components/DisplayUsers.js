import React from 'react';

const DisplayUsers = (props) => {
    return (
        <div>
            <h3>Followers</h3>
            <div>
                {props.users.login}
                <img src={props.users.avatar_url} />
            </div>
            {props.users.map(users => 
                <div>
                    <h4>{users.login}</h4>
                    <img src={users.avatar_url} />
                </div>
            )}
        </div>
    )
}

export default DisplayUsers;