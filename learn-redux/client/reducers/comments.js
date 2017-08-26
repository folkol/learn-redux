// a reducer takes in two things:
// 1. the action (info about what happened)
// 2. copy of the current state


function comments(state = [], action) {
	console.log(typeof(state), state, action);
	switch(action.type) {
		case 'ADD_COMMENT':
			const newState = {
				...state,
				[action['postId']]: [
					...state[action.postId],
					{
						user: action.author,
						text: action.comment
					}
				]
			};
			console.log(newState);
			return newState;
		default:
			return state;
	}
}

export default comments;
