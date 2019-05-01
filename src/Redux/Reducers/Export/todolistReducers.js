import { TODOLIST_DELETE } from '../../types';


const INITIAL_STATE = {
    todolistDelete: ''
};


const todolistReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TODOLIST_DELETE:
            return {
                ...state, todolistDelete: action.payload
            };

        default:
            return state;
    }
}
export default todolistReducer;