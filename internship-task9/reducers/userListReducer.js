const initialState = {
    users: [],
    currentName: '',
    filterName: ''
};

export default function userListReducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD_USER': {
            const name = state.currentName.trim();
            const { users } = state;
            if (name) {
                const user = {
                    name: state.currentName,
                    id: Date.now()
                };
                users.push(user);
            }
            const currentName = '';
            return Object.assign({}, state, users, currentName);
        }
        case 'DELETE_USER': {
            const { user } = action;
            const { users } = state;
            const deleteIndex = users.findIndex((item) => {
                return (item.id === user.id);
            });
            users.splice(deleteIndex, 1);
            return Object.assign({}, state, {users});
        }
        case 'FILTER_USERS': {
            const { filterName } = action;
            return Object.assign({}, state, {filterName});
        }
        case 'UPDATE_CURRENT_NAME': {
            const { name } = action;
            return Object.assign({}, state, {currentName: name});
        }
        default: {
            return state;
        }
    }
}