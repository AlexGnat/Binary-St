export function addUser(user) {
    const action = {
        type: 'ADD_USER'
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

export function filterUsers(filterName) {
    const action = {
        type: 'FILTER_USERS',
        filterName: filterName
    };
    return action;
}

export function updateCurrentName(name) {
    const action = {
        type: 'UPDATE_CURRENT_NAME',
        name: name
    };
    return action;
}
