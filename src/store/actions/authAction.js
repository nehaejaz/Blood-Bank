// const login = (credentials) => {
//     return(dispatch,getState) => {

//         dispatch({type:'Login',credentials: credentials})
//     }
// }
// export default login

 const signup = (credentials) => {
    return(dispatch,getState) => {

        dispatch({type:'Signup',credentials:credentials})
    }
}

export default signup