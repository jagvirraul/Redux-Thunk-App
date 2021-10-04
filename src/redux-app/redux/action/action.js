import { ADD_ITEM, GET_USERS } from "../constants";
import axios from "axios";
let nextid = 100;
export const additem = (contents) => {
    return ({
        type: ADD_ITEM,
        payload: {
            id: ++nextid,
         contents,
        }
    })
};

export const getUserList = (...params) => async (dispatch) => {
    try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/`)
        console.log("res", res)
        dispatch({
            type: GET_USERS,
            payload: res.data,
        })
    } catch (error) {
        console.log("error", error)
    }
};
// export const getUserList = () => {
//     return ({
//         type: GET_USERS,
//         payload: res.data,
//     })
// };

// export const getUserList = async ()  => {
//     try {
//         const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/`)
//         console.log("res",res)
//         return ({
//             type: GET_USERS,
//             payload: res.data,
//         })
//     } catch (error) {
//         console.log("error", error)
//     }
// };


// export const GetUsers = () => {
//     console.log("GetUsers");
//     return async (dispatch) => {
//         console.log("GetUsers dispatch");
//         await axios.get(`https://jsonplaceholder.typicode.com/posts/`)
//             .then(res => {
//                 const persons = res.data;
//                 dispatch({
//                     type: GET_USERS,
//                     payload: persons
//                 });
//             })
//     };
// };