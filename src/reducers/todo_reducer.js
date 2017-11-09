import types from '../actions/types';

const DEFAULT_STATE = {all:[], single: null};

export default (state = DEFAULT_STATE, action) =>{
	switch(action.type){
		case types.GET_ALL:
			// console.log('at todoReducer in get all', action.payload.data);
			return {...state, all:action.payload.data.todos};
		case types.GET_SINGLE:
		case types.TOGGLE_COMPLETE:
			// console.log(action.payload);
			return {...state, single: action.payload.data.todo};
		case types.DELETE_ITEM:
			// console.log('at todo_reducer', action.payload.data.msg, action.payload);
			return {...state, single: action.payload.data};
		default:
			return state;
	}
}