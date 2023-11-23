import { ADD_TO_CART,REMOVE_FROM_CART } from "../constant/cartConstant";
import axios from "axios";
const ApiHaWB = `https://haweb-api.onrender.com`;
export const addToCart = (slug) => async (dispatch,getState) => {
    const res = await axios.get(`${ApiHaWB}/api/product/${slug}`)
    const productData = res.data.product[0];
    const { _id,title, photo,category,codeProduct } = productData;
    try {
        dispatch({
            type:ADD_TO_CART,
            payload:{
                id: _id,
                title,
                photo,
                category,
                slug,
                codeProduct,
            },
         
         })
         localStorage.setItem("save-product", JSON.stringify(getState().product.cart.cartItems));
    } catch (error) {
        console.log(error);
    }
     
       
}
export const removeFromCart = (slug) => (dispatch, getState) => {
    try {
        dispatch({
            type: REMOVE_FROM_CART,
            payload: slug,
          });
        
          localStorage.setItem("save-product", JSON.stringify(getState().product.cart.cartItems));
    }catch (error) {
        return error
    }
  
};
