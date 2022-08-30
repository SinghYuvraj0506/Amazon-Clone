
export const itemToBasket = (id,title,image,price,rating) =>{
    return (dispatch)=>{
        dispatch({
            type:"addtobasket",
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating
            }
        })
    }
}

export const removeFromBasket = (id) =>{
    return (dispatch)=>{
        dispatch({
            type:"removefrombasket",
            payload:id
        })
    }
}

export const emptytheBasket = () =>{
    return (dispatch)=>{
        dispatch({  
            type:"emptybasket"
        })
    }
}

export const user = (user_details) =>{
    return (dispatch)=>{
        dispatch({
            type:"currentuser",
            user:user_details
        })
    }
}