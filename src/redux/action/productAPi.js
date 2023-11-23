import axios from "axios";
import {  FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS,FETCH_PRODUCTS_FAILURE,FETCH_PRODUCT_DETAILS_REQUEST,FETCH_PRODUCT_DETAILS_SUCCESS,FETCH_PRODUCT_DETAILS_FAIL ,FETCH_PRODUCT_DETAILS_RESET} from "../constant/productConstant"


const ApiHaWB = `https://haweb-api.onrender.com`;


export const getProducts = (key) => async (dispatch) => {
    dispatch({ type: FETCH_PRODUCTS_REQUEST });
    const response = await axios.get(`${ApiHaWB}/api/product/category/${key}`);
    try {

      dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: error.message });
    }
  }

export const getProductsDetail = (slug) => async (dispatch) => {
  dispatch({ type: FETCH_PRODUCT_DETAILS_REQUEST });
  const response = await axios.get(`${ApiHaWB}/api/product/${slug}`);
  try {

    dispatch({ type: FETCH_PRODUCT_DETAILS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_PRODUCT_DETAILS_FAIL, payload: error.message });
  }
}

// export const randomProduct = (key) => async (dispatch) => {
//   dispatch({ type: FETCH_PRODUCTS_REQUEST });
  
//   try {
//     const response = await axios.get(`${ApiHaWB}/api/product/category/${key}`);
//     const shuffledProducts = shuffle([...response.data]);
//     const random15Products = shuffledProducts.slice(0, Math.min(15, shuffledProducts.length));

//     dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: { key, products: random15Products } });
//   } catch (error) {
//     dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: error.message });
//   }
// }

// function shuffle(array) {
//   let currentIndex = array.length, randomIndex;

//   while (currentIndex !== 0) {
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex--;

//     [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
//   }

//   return array;
// }



