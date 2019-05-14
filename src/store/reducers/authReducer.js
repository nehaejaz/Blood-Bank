const initState = {

}

const authReducer = (state=initState,action) =>{
    switch(action.type){
        case 'Signup':
        console.log("user Signed up",action.credentials)

        // case 'Login':
        // console.log("user logged in",action.credentials)
    }
    return state
}

export default authReducer