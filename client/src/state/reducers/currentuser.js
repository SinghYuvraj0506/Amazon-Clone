const initialstate = {
  user:null
}
    
  

const reducer = (state = initialstate, action) => {
  if (action.type === "currentuser") {
    return {
      ...state,
      user: action.user,
    };
  }
  else{
    return state
  }
};

export default reducer;
