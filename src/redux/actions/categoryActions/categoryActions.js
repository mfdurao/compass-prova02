 import {
  CATEGORY_REQUEST,
  CATEGORY_ERROR,
  CATEGORY_SUCCESS,
} from "../../types/categoryTypes";

export const categoryRequest = () => ({
  type: CATEGORY_REQUEST,
})

export const categorySuccess = (allCategories) => ({
  type: CATEGORY_SUCCESS,
  allCategories,
})

export const categoryError = error => ({
  type: CATEGORY_ERROR,
  error,
})
