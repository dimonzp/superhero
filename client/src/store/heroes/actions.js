//load heroes and set to state
export const SET_HEROES = "SET_HEROES";
export const LOAD_HEROES_BY_PAGE = "LOAD_HEROES_BY_PAGE";

//load hero profile and set to state
export const SET_HERO_PROFILE = "SET_HERO_PROFILE";
export const LOAD_HERO_PROFILE = "LOAD_HERO_PROFILE";

export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

export const ADD_NEW_HERO = "ADD_NEW_HERO";

export const DELETE_HERO = "DELETE_HERO";

export const deleteHero = (id) => ({ type: DELETE_HERO, id });

export const addNewHero = (hero) => ({ type: ADD_NEW_HERO, hero });

export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, page });

export const setHeroes = (heroes) => ({ type: SET_HEROES, heroes });
export const loadHeroesByPage = (page) => ({ type: LOAD_HEROES_BY_PAGE, page });

export const setHeroProfile = (profile) => ({
  type: SET_HERO_PROFILE,
  profile,
});
export const loadProfileById = (id) => ({ type: LOAD_HERO_PROFILE, id });
