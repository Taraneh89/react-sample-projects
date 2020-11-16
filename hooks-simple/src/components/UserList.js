import React from 'react';
import useResources from './useResources';
import UserReducers from './useResources';

const UserList =()=>{
    const Users = useResources('users');
    return(
        <ul>
            {Users.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>

    );
};
export default UserList;