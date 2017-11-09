import types from '../actions/types';

const DEFAULT_STATE = {all:[], single: null};

export default (state = DEFAULT_STATE, action) =>{
	switch(action.type){
		case types.GET_ALL:
			return {...state, all:action.payload.data.todos};
		case types.GET_SINGLE:
		case types.TOGGLE_COMPLETE:
			return {...state, single: action.payload.data.todo};
		case types.DELETE_ITEM:
			console.log('at todo_reducer', action.payload.data.msg);
			return {...state, single: action.payload.data.msg};
		default:
			return state;
	}
}