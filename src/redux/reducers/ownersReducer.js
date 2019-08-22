const owners = (state = [], action) => {
    switch (action.type) {
        case 'SET_OWNERS':
            return action.payload;
        default:
            return state;
    }
};

// loginMode will be on the redux state at:
// state.loginMode
export default owners;