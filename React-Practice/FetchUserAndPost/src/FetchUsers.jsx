import { useState } from "react"


function FetchUsers(){
    const [users, setUsers] = useState([]);

    const fetchUsers = () => {
        fetch(`'https://jsonplaceholder.typicode.com/users`)
        .then(ApiResult => ApiResult.json())
        .then(data => setUsers(data))
        .catch(error => console.error('Error fetching users:', error));
    }
    return(
        <>
            <h2>Fetch Users</h2>
            <button onClick={fetchUsers}>Fetch Users</button>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </>
    )
}
export default FetchUsers;
// import React, { useState } from "react";

// function FetchUsers() {
//     const [users, setUsers] = useState([]);

//     const fetchUsers = () => {
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response => response.json())
//         .then(data => setUsers(data))
//         .catch(error => console.error('Error fetching users:', error));
//     };

//     return (
//         <>
//             <h2>Fetch Users</h2>
//             <button onClick={fetchUsers}>Fetch Users</button>
//             <ul>
//                 {users.map(user => (
//                     <li key={user.id}>{user.name}</li>
//                 ))}
//             </ul>
//         </>
//     );
// }

// export default FetchUsers;