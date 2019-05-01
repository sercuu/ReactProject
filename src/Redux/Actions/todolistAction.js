import {TODOLIST_DELETE} from '../types';

export const todolistDelete = (number) => dispath => {
    console.log(number, 'number');
    dispath({
        type: TODOLIST_DELETE,
        payload: number
    });
}