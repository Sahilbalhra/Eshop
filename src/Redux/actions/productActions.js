import axios from "axios";
import fakeStoreApi from "../../apis/fakeStoreApi";
// import fakeStoreApi from "../../apis/fakeStoreApi"
import { ActionTypes } from "../contants/action-type";
export const fetchProducts = () => {
  return async (dispatch) => {
    const response = await fakeStoreApi.get("/products");
    dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });
  };
  // console.log(response);
  //   return {
  //     type: ActionTypes.FETCH_PRODUCTS,
  //     payload: response,
  //   };
};
//product details
export const fetchProduct = (id) =>  async (dispatch) => {
      const response = await fakeStoreApi.get(`/products/${id}`);
      dispatch({ type: ActionTypes.SELECTED_PRODUCT, payload: response.data });
    };
 
export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};
export const selectedProduct = (products) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: products,
  };
};
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
