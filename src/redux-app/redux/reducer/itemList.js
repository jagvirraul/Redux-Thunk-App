import { ADD_ITEM ,GET_USERS} from "../constants";

const initialState = {
    userList:[]
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_ITEM:
            const {id,contents} = action.payload;
            return ({
                ...state,
                userList: [...state.userList,{title:contents,id:id}]
            });
        
        case GET_USERS:
            return ({
                ...state,
                userList: action.payload
            });
        
        default:
            return state;
    }
};
