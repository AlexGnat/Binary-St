export function addUser(user) {
    const action = {
        type: 'ADD_USER',
        user: user
    };
    return action;
}

export function deleteUser(user) {
    const action = {
        type: 'DELETE_USER',
        user: user
    };
    return action;
}

export function filterUsers(filter) {
    const action = {
        type: 'FILTER_USERS',
        filter: filter
    };
    return action;
}

