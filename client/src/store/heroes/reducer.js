import { SET_CURRENT_PAGE, SET_HEROES, SET_HERO_PROFILE } from "./actions";

const initialState = {
  heroes: [],
  page: 1,
  allHeroesCount: 0,
  _id: "",
  nickname: "",
  rea_name: "",
  origin_description: "",
  superpowers: "",
  catch_phrase: "",
  images: [],
};

export const heroReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HEROES: {
      
      return { ...state, ...action.heroes };
    }

    case SET_HERO_PROFILE: {
      
      return {
        ...state,
        ...action.profile
      };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, page: action.page };
    }

    default:
      return state;
  }
};

export default heroReducer;
