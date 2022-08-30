const initialstate = {
  basket: [],
};

const reducer = (state = initialstate, action) => {
  if (action.type === "addtobasket") {
    return {
      ...state,
      basket: [...state.basket, action.item],
    };
  } 

  else if (action.type === "emptybasket") {
    return {
      ...state,
      basket: [],
    };
  } 
  
  else if (action.type === "removefrombasket") {
    const index = state.basket.findIndex((e) => {
      return e.id === action.payload;
    });
    let newbasket = [...state.basket];
    if (index >= 0) {
      newbasket.splice(index,1)
    }
    else {
      console.warn(`Cannot Remove ${action.payload} as it is not in basket!`);
    }

    return{
        ...state,
        basket:newbasket
    }
  }
  
  
  
  
  else {
    return state;
  }
};

export default reducer;
