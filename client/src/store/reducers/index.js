import {
  FETCH_INGREDIENTS,
  SELECT_INGREDIENT,
  MAKE_RECIPE
} from '../actions/types';

const DEFAULTS = {
  ingredients: null,
  recipes: null,
  randomRecipe: null
};

export default function (state=DEFAULTS, action) {
  switch(action.type) {
    case FETCH_INGREDIENTS:
      return { ...state,
        ingredients: action.payload};
    case SELECT_INGREDIENT:
      return { ...state,
        ingredients: action.payload};
    case MAKE_RECIPE:
      return { ...state,
        randomRecipe: action.payload};
    default:
      return state;
  }
}