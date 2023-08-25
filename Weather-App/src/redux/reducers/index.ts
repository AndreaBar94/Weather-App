import { CITY } from "../actions";

const initialState = {
	city: {
		content: null,
	},
};

const mainReducer = (state = initialState, action: Action) => {
	switch (action.type) {
		case CITY:
			return {
				...state,
				city: {
					content: action.payload,
				},
			};
		default:
			return state;
	}
};

export default mainReducer;