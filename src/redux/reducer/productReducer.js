import {  
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
    FETCH_PRODUCT_DETAILS_REQUEST,
    FETCH_PRODUCT_DETAILS_SUCCESS,
    FETCH_PRODUCT_DETAILS_FAIL,
    FETCH_PRODUCT_DETAILS_RESET
  } from "../constant/productConstant"

  export const getProductReducer = (state = { product: {} }, action) => {
    switch (action.type) {
      case FETCH_PRODUCTS_REQUEST:
        return { ...state, loading: true, error: null };
      case FETCH_PRODUCTS_SUCCESS:
        return { ...state, loading: false, products: action.payload };
      case FETCH_PRODUCTS_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };

export const getProductDetailReducer = (state = {},action) => {
   switch (action.type){
      case FETCH_PRODUCT_DETAILS_REQUEST:
        return {loading: true,}
      case FETCH_PRODUCT_DETAILS_SUCCESS:
        return {loading:false,value:action.payload}
      case FETCH_PRODUCT_DETAILS_FAIL:
        return {loading:false,error:action.payload}
      case FETCH_PRODUCT_DETAILS_RESET:
        return {product:{}}
      default:
        return state;
   }
}